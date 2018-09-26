import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { StocksSrvService } from '../../services/stocks-srv.service';
import { ActivatedRoute } from '@angular/router';
import { BaseStock } from '../../models/stock';


@Component({
  selector: 'app-stock-history',
  templateUrl: './stock-history.component.html',
  styleUrls: ['./stock-history.component.css']
})
export class StockHistoryComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;


  displayedColumns: string[] = ['symbol',
    'name',
    'price',
    'createdAt'
  ];

  dataSource = new MatTableDataSource();

  stockSymbol: string = null;
  stock: BaseStock;
  totalSize: number;
  pageSize: number = 5;

  constructor(private stockSrv: StocksSrvService,
    private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.stockSymbol = params['symbol'];

      //first call to fill the table
      this.stockSrv.getStockHistory(this.stockSymbol, 0, this.pageSize)
        .subscribe((data) => {
          this.dataSource.data = data[0];
          this.totalSize = data[1];
        });
    })
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.paginator.page.subscribe((data) => {
        this.stockSrv.getStockHistory(this.stockSymbol, data.pageIndex, data.pageSize)
          .subscribe((data) => {
            this.totalSize = data[1];
            this.dataSource.data = data[0];
          });
      })
    }
  }

  ngOnInit() {
  }

}
