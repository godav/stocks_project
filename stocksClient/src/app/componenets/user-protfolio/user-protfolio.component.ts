import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { StocksSrvService } from '../../services/stocks-srv.service'
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { StockProtfolio } from '../../models/stock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-protfolio',
  templateUrl: './user-protfolio.component.html',
  styleUrls: ['./user-protfolio.component.css']
})
export class UserProtfolioComponent implements OnInit {

  ngOnDestroy(): void {
    this.socket.removeListener('protfolio');
  }

  displayedColumns: string[] = ['symbol',
    'name',
    'amount',
    'price',
    'priceChangeDots',
    'priceChangePercent',
    'value',
    'total',
    'buyOperation',
    'sellOperation'
  ];

  dataSource = new MatTableDataSource();
  rawData:Array<StockProtfolio> = [];

  private getUserProtfolio(): Observable<Array<StockProtfolio>> {
    return this.socket.fromEvent("protfolio");
  }

  constructor(private stockSrv: StocksSrvService, private socket: Socket, private router:Router) {
    this.getUserProtfolio().subscribe(data => {
      this.dataSource.data = data
      this.rawData = data;  // used to map the total value
    });

    this.stockSrv.getStocksFromProtfolio().subscribe(data => {
      this.dataSource.data = data
      this.rawData = data;
    });
  }

  // used to make red/green color indicator
  checkChangeRaised(dots) {
    if (parseInt(dots) >= 0)
      return true;
    else
      return false;
  }

  goToBuyStocks(element: StockProtfolio) {
    this.router.navigate(['/', 'user-trade', element.symbol, 1]);
  }

  goToSellStocks(element: StockProtfolio) {
    this.router.navigate(['/', 'user-trade', element.symbol, 2]);
  }

  getTotalCost() {
    return this.rawData.map(t => t.total).reduce((acc, value) => acc + value, 0);
  }

  getTotalValue() {
    return this.rawData.map(v => v.value).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
  }

}
