import { Component, OnInit } from '@angular/core';
import { Highcharts, Chart } from 'angular-highcharts';
import { BaseStock } from '../../models/stock';
import { StocksSrvService } from '../../services/stocks-service/stocks-srv.service';
import { ActivatedRoute } from '@angular/router';

Highcharts.setOptions({
  global: {
    useUTC: true,
    timezoneOffset: 0
  }
});

@Component({
  selector: 'app-stocks-market-chart',
  templateUrl: './stocks-market-chart.component.html',
  styleUrls: ['./stocks-market-chart.component.css']
})
export class StocksMarketChartComponent implements OnInit {

  stocksHistoryData: BaseStock;
  stockChart: Chart;
  Highcharts = Highcharts;
  data: any = [];

  constructor(private stockSrv: StocksSrvService, private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.stockSrv.getStocksMarketForChart().subscribe(data => {
        
        this.data = data;
        
        this.stockChart = new Chart({
          chart: {
            zoomType: 'x'
          },
          title: {
            text: 'Prices change over time in the market'
          },
          xAxis: {
            type: 'datetime'
          },
          yAxis: {
            title: {
              text: 'Price'
            }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          credits: {
            enabled: false
          },
          series: this.data,
        });
      });
    });
  }

  ngOnInit() {
  }

}
