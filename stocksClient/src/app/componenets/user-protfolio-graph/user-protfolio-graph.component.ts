import { Component, OnInit } from '@angular/core';
import { StocksSrvService } from '../../services/stocks-service/stocks-srv.service';
import { Chart } from 'angular-highcharts';



//Highcharts.setOptions(Highcharts.theme);

@Component({
  selector: 'app-user-protfolio-graph',
  templateUrl: './user-protfolio-graph.component.html',
  styleUrls: ['./user-protfolio-graph.component.css']
})
export class UserProtfolioGraphComponent implements OnInit {

  stockChart: Chart;
  data: any = [];

  constructor(private stockSrv: StocksSrvService) {

    this.stockSrv.getUserStocksForChart().subscribe(data => {    
      this.data = data; 
      this.stockChart = new Chart({
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'User stocks value in the protfolio'
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color: 'black'
              }
            }
          }
        },
        series: [{
          name: 'User Protfolio',
          data: this.data
        }]
      });
    });

  }

  ngOnInit(): void {

  }

}




