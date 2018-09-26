import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl, ValidatorFn, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import { UserStocksOp } from '../../models/stock';
import { StocksSrvService } from '../../services/stocks-srv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { formatNumber } from '@angular/common';
import { MatDialog, ErrorStateMatcher } from '@angular/material';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';

// used for amount validation
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-user-trade',
  templateUrl: './user-trade.component.html',
  styleUrls: ['./user-trade.component.css']
})

export class UserTradeComponent implements OnInit {

  form: FormGroup;
  stock: UserStocksOp;
  matcher = new MyErrorStateMatcher();

  setForm() {
    this.form = this.fb.group({
      symbol: new FormControl({ value: this.stock.symbol, disabled: true }),
      name: new FormControl({ value: this.stock.name, disabled: true }),
      amount: new FormControl(this.stock.amount,
        [Validators.required, this.forbiddenNumberValidator(/^[1-9][0-9]*$/)]),
      price: new FormControl({ value: formatNumber(this.stock.price, 'en-US', '1.2-2'), disabled: true }),
      operation: [this.stock.operation]
    })
  }

  // custom validator for number in regEX
  private forbiddenNumberValidator(numberRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = !numberRe.test(control.value);
      return forbidden ? { 'forbiddenNumber': { value: control.value } } : null;
    };
  }

  constructor(private stockSrv: StocksSrvService, private fb: FormBuilder,
    private dialog: MatDialog, private activatedRoute: ActivatedRoute, private router: Router) {

    this.activatedRoute.params.subscribe(params => {
      this.stock = null;
      this.stockSrv.stocks$.subscribe(stocks => {
        let currentStock = stocks.filter(stock => stock.symbol.includes(params['symbol']))
        // first time enter to form
        if (!this.stock) {
          // check if buy operation
          if (parseInt(params['operation'], 10) === 1) {
            this.stock = {
              symbol: currentStock[0].symbol,
              name: currentStock[0].name,
              price: currentStock[0].price,
              operation: 1,
              amount: 0
            }
            this.setForm();

          } else { // check if sell operation
            this.stockSrv.getStockFromProtfolio(currentStock[0].symbol).subscribe(userStock => {
              // if (userStock) {
                this.stock = {
                  symbol: currentStock[0].symbol,
                  name: currentStock[0].name,
                  price: currentStock[0].price,
                  operation: 2,
                  amount: parseInt(userStock[0].amount)
                }

                this.setForm();
              // }
              // else {
              //   console.log('user dont poses this stock')
              // }
            })
          }
        } else {// if the route change to diffrent stock the component not reload so change manually
          this.stock.name = currentStock[0].name;
          this.stock.symbol = currentStock[0].symbol;
          this.stock.price = currentStock[0].price;
          this.stock.operation = parseInt(params['operation'], 10);
          this.form.controls.symbol.setValue(currentStock[0].symbol);
          this.form.controls.name.setValue(currentStock[0].name);
          this.form.controls.price.setValue(formatNumber(currentStock[0].price, 'en-US', '1.2-2'));
          this.form.controls.operation.setValue(this.stock.operation);
        }
      });

    });
  }

  save() {
    if (this.form.valid) {
      this.stock.amount = parseInt(this.form.get('amount').value);
      let data: any = {
        type: this.stock.operation === 1 ? 'buy' : 'sell',
        name: this.stock.name,
        amount: this.stock.amount,
        price: this.stock.price,
        total: this.stock.price * this.stock.amount
      }

      if (this.stock.operation === 1) { // if buy operation
        this.stockSrv.buyStocks(this.stock).subscribe(x => {
          this.dialog.open(SuccessDialogComponent, {data}).afterClosed().subscribe(() => {
            this.router.navigate(['/', 'user-protfolio']);
          });
        });
      } else { // if sell operation
        this.stockSrv.sellStocks(this.stock).subscribe(x => {
          this.dialog.open(SuccessDialogComponent, {data}).afterClosed().subscribe(() => {
            this.router.navigate(['/', 'user-protfolio']);
          });;

        });
      }
    }
  }

  // used to sell slider format for big numbers
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  ngOnInit() {
  }

}

