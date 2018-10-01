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
  selector: 'app-stock-history-chart',
  templateUrl: './stock-history-chart.component.html',
  styleUrls: ['./stock-history-chart.component.css']
})
export class StockHistoryChartComponent implements OnInit {
  data: any = [];
  stocksHistoryData: BaseStock;
  stockChart: Chart;
  Highcharts = Highcharts;

  constructor(private stockSrv: StocksSrvService,
    private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(params => {
      this.stockSrv.getStockHistoryForChart(params['symbol']).subscribe(data => {
        this.data = data[0];
        this.stockChart = new Chart({
          chart: {
            zoomType: 'x'
          },
          title: {
            text: 'Prices change over time for ' + data[1] + ' stock'
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
            enabled: false
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: 'Market History',
              data: this.data
            }
          ]
        });
      });
    });
  }


  ngOnInit() {
  }

}
