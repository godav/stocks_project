import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '../../node_modules/@angular/router';
import { ROUTES } from './routing/app.routing';
import { AppComponent } from './app.component';
import { StocksViewComponent } from    './componenets/stocks-view/stocks-view.component';
import { StockHistoryComponent } from './componenets/stock-history/stock-history.component';
import { UserProtfolioComponent } from './componenets/user-protfolio/user-protfolio.component';
import { UserHistoryComponent } from './componenets/user-history/user-history.component';
import { UserTradeComponent } from './componenets/user-trade/user-trade.component';
import 'hammerjs';
import { ChartModule } from 'angular-highcharts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatTableModule,
   MatProgressSpinnerModule, MatToolbarModule,MatInputModule,
   MatCardModule,
   MatDialogModule,
   MatDividerModule,
   MatLineModule,
   MatListModule,
   MatSliderModule,
   MatPaginatorModule,
   MatTabsModule} from '@angular/material';
import { OpTransformPipe } from './pipes/op-transform.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SuccessDialogComponent } from './componenets/success-dialog/success-dialog.component';
import { StockHistoryChartComponent } from './componenets/stock-history-chart/stock-history-chart.component';
import { StocksMarketChartComponent } from './componenets/stocks-market-chart/stocks-market-chart.component';
import { UserProtfolioGraphComponent } from './componenets/user-protfolio-graph/user-protfolio-graph.component';
import { environment } from '../environments/environment';

const config: SocketIoConfig = { url: `${environment.API_URL}`, options: {} };

@NgModule({
  declarations: [
    AppComponent,
    StocksViewComponent,
    StockHistoryComponent,
    UserProtfolioComponent,
    UserHistoryComponent,
    UserTradeComponent,
    OpTransformPipe,
    SuccessDialogComponent,
    StockHistoryChartComponent,
    StocksMarketChartComponent,
    UserProtfolioGraphComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ChartModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatDividerModule,
    MatSliderModule,
    MatLineModule,
    MatPaginatorModule,
    MatListModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    SocketIoModule.forRoot(config),
    RouterModule.forRoot(ROUTES,{
      onSameUrlNavigation: 'reload'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SuccessDialogComponent]
})
export class AppModule { }
