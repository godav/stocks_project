import { StocksViewComponent } from '../componenets/stocks-view/stocks-view.component'
import { UserProtfolioComponent } from '../componenets/user-protfolio/user-protfolio.component'
import { UserHistoryComponent } from '../componenets/user-history/user-history.component'
import { StockHistoryComponent } from '../componenets/stock-history/stock-history.component'
import { Route } from '@angular/router';
import { UserTradeComponent } from '../componenets/user-trade/user-trade.component';
import { StockHistoryChartComponent } from '../componenets/stock-history-chart/stock-history-chart.component';

export const ROUTES: Route[] = [

  {
    path: 'stocks-view', component: StocksViewComponent
  },
  {
    path: 'user-protfolio', component: UserProtfolioComponent
  },
  {
    path: 'user-history', component: UserHistoryComponent
  },
  {
    path: 'stock-history/:symbol', component: StockHistoryComponent
  },
  {
    path: 'user-trade/:symbol/:operation', component: UserTradeComponent
  },
  {
    path: 'stock-history-chart/:symbol', component: StockHistoryChartComponent
  },
  { path: '', pathMatch: 'full', redirectTo: '/' }

];
