import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { StocksSrvService } from '../../services/stocks-srv.service';
import { ActivatedRoute } from '@angular/router';
import { UserStocksOp } from '../../models/stock';

@Component({
  selector: 'app-user-history',
  templateUrl: './user-history.component.html',
  styleUrls: ['./user-history.component.css']
})

export class UserHistoryComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new MatTableDataSource();
  stockSymbol: string = null;
  stock: UserStocksOp;
  totalSize: number;
  pageSize: number = 5;
  displayedColumns: string[] = ['symbol',
    'name',
    'amount',
    'price',
    'operation'
  ];

  constructor(private stockSrv: StocksSrvService,
    private activatedRoute: ActivatedRoute) {

    //first call to fill the table
    this.stockSrv.getUserStockHistory(0, this.pageSize).subscribe((data) => {
      this.dataSource.data = data[0];
      this.totalSize = data[1];
    });
  }

  ngAfterViewInit() {
    if (this.paginator) {
      this.paginator.page.subscribe((data) => {
        this.stockSrv.getUserStockHistory(data.pageIndex, data.pageSize).subscribe((data) => {
          this.totalSize = data[1];
          this.dataSource.data = data[0];
        });
      })
    }
  }

  ngOnInit() {
  }

}
