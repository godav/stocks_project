import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from '../../models/stock';
import { StocksSrvService } from '../../services/stocks-service/stocks-srv.service';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stocks-view',
  templateUrl: './stocks-view.component.html',
  styleUrls: ['./stocks-view.component.css']
})
export class StocksViewComponent implements OnInit {

  stocks: Observable<Array<Stock>>;
  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['symbol',
    'name',
    'price',
    'priceChangeDots',
    'priceChangePercent',
    'history',
    'graph',
    'buyOperation'
  ];


  constructor(private stockSrv: StocksSrvService,
    private router: Router) {
    this.stockSrv.stocks$.subscribe(data => this.dataSource.data = data);
  }

  // used to make the colors red/green
  checkChangeRaised(dots) {
    return dots >= 0;
  }

  goToStockHistory(element: Stock) {
    this.router.navigate(['/', 'stock-history', element.symbol]);
  }

  goToBuyStocks(element: Stock) {
    this.router.navigate(['/', 'user-trade', element.symbol, 1]);
  }

  goToChart(element: Stock) {
    this.router.navigate(['/', 'stock-history-chart', element.symbol]);
  }

  ngOnInit() {
  }

}
