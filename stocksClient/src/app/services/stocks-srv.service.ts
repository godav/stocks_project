import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { Stock, StockProtfolio, UserStocksOp } from '../models/stock';
import { HttpClient } from '@angular/common/http';
import { Socket } from 'ngx-socket-io';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StocksSrvService {

  stocks$: BehaviorSubject<Array<Stock>> = new BehaviorSubject<Array<Stock>>([]);

  // used to get data of the market from the socket
  private getStocks(): Observable<Array<Stock>> {
    return this.socket.fromEvent("update");
  }

  // used to get data of the market for first time before socket emit from server
  private getStocksFromMarket(): Observable<Array<Stock>> {
    return this.http.get<Array<Stock>>(`${environment.API_URL}/api/stocks/`);
  }

  getStockFromProtfolio(symbol: string): Observable<StockProtfolio> {
    return this.http.get<StockProtfolio>(`${environment.API_URL}/api/protfolio/${symbol}`);
  }

  getStocksFromProtfolio(): Observable<Array<StockProtfolio>> {
    return this.http.get<Array<StockProtfolio>>(`${environment.API_URL}/api/protfolio/`);
  }

  getStockHistory(symbol: string, pageIndex: number, pageSize: number): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.API_URL}/api/stocks/history/${symbol}?page=${pageIndex}&size=${pageSize}`);
  }

  // getStockHistoryCount(symbol: string): Observable<number> {
  //   return this.http.get<number>(`${environment.API_URL}/api/stocks/history-count/${symbol}`);
  // }

  getStockHistoryForChart(symbol: string): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.API_URL}/api/stocks/history-chart/${symbol}`);
  }

  getStocksMarketForChart(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.API_URL}/api/stocks/history-charts/`);
  }

  getUserStocksForChart(): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.API_URL}/api/user-info/user-protfolio-chart/`);
  }

  getUserStockHistory(pageIndex: number, pageSize: number): Observable<Array<any>> {
    return this.http.get<Array<any>>(`${environment.API_URL}/api/user-info/transactions/?page=${pageIndex}&size=${pageSize}`);
  }

  buyStocks(stock: UserStocksOp): Observable<UserStocksOp> {
    return this.http.post<UserStocksOp>(`${environment.API_URL}/api/protfolio/buy`, stock);
  }

  sellStocks(stock: UserStocksOp): Observable<UserStocksOp> {
    return this.http.post<UserStocksOp>(`${environment.API_URL}/api/protfolio/sell`, stock);
  }

  constructor(private http: HttpClient, private socket: Socket) {
    // subscribe to market stocks price change when socket emit from server
    this.getStocks().subscribe(results => {
      this.stocks$.next(results);
    });

    // used for first time before socket emits the data
    this.getStocksFromMarket().subscribe(results => {
      this.stocks$.next(results);
    });
  }
}
