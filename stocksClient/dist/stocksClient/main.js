(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span>Godav Stocks</span>\n    <a mat-button [routerLink]=\"['/']\" routerLinkActive='active' >Home</a>\n    <a mat-button [routerLink]=\"['/','user-protfolio']\" routerLinkActive='active'>Protfolio</a>\n</mat-toolbar>\n<app-stocks-view></app-stocks-view>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'stocksClient';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routing_app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routing/app.routing */ "./src/app/routing/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componenets_stocks_view_stocks_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componenets/stocks-view/stocks-view.component */ "./src/app/componenets/stocks-view/stocks-view.component.ts");
/* harmony import */ var _componenets_stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componenets/stock-history/stock-history.component */ "./src/app/componenets/stock-history/stock-history.component.ts");
/* harmony import */ var _componenets_user_protfolio_user_protfolio_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componenets/user-protfolio/user-protfolio.component */ "./src/app/componenets/user-protfolio/user-protfolio.component.ts");
/* harmony import */ var _componenets_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componenets/user-history/user-history.component */ "./src/app/componenets/user-history/user-history.component.ts");
/* harmony import */ var _componenets_user_trade_user_trade_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componenets/user-trade/user-trade.component */ "./src/app/componenets/user-trade/user-trade.component.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _pipes_op_transform_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pipes/op-transform.pipe */ "./src/app/pipes/op-transform.pipe.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _componenets_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./componenets/success-dialog/success-dialog.component */ "./src/app/componenets/success-dialog/success-dialog.component.ts");
/* harmony import */ var _componenets_stock_history_chart_stock_history_chart_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componenets/stock-history-chart/stock-history-chart.component */ "./src/app/componenets/stock-history-chart/stock-history-chart.component.ts");
/* harmony import */ var _componenets_stocks_market_chart_stocks_market_chart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componenets/stocks-market-chart/stocks-market-chart.component */ "./src/app/componenets/stocks-market-chart/stocks-market-chart.component.ts");
/* harmony import */ var _componenets_user_protfolio_graph_user_protfolio_graph_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componenets/user-protfolio-graph/user-protfolio-graph.component */ "./src/app/componenets/user-protfolio-graph/user-protfolio-graph.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var config = { url: "" + _environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].API_URL, options: {} };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _componenets_stocks_view_stocks_view_component__WEBPACK_IMPORTED_MODULE_7__["StocksViewComponent"],
                _componenets_stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_8__["StockHistoryComponent"],
                _componenets_user_protfolio_user_protfolio_component__WEBPACK_IMPORTED_MODULE_9__["UserProtfolioComponent"],
                _componenets_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_10__["UserHistoryComponent"],
                _componenets_user_trade_user_trade_component__WEBPACK_IMPORTED_MODULE_11__["UserTradeComponent"],
                _pipes_op_transform_pipe__WEBPACK_IMPORTED_MODULE_16__["OpTransformPipe"],
                _componenets_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SuccessDialogComponent"],
                _componenets_stock_history_chart_stock_history_chart_component__WEBPACK_IMPORTED_MODULE_20__["StockHistoryChartComponent"],
                _componenets_stocks_market_chart_stocks_market_chart_component__WEBPACK_IMPORTED_MODULE_21__["StocksMarketChartComponent"],
                _componenets_user_protfolio_graph_user_protfolio_graph_component__WEBPACK_IMPORTED_MODULE_22__["UserProtfolioGraphComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _node_modules_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_13__["ChartModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatLineModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__["MatFormFieldModule"],
                ngx_socket_io__WEBPACK_IMPORTED_MODULE_18__["SocketIoModule"].forRoot(config),
                _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_routing_app_routing__WEBPACK_IMPORTED_MODULE_5__["ROUTES"], {
                    onSameUrlNavigation: 'reload'
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [_componenets_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_19__["SuccessDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/componenets/stock-history-chart/stock-history-chart.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componenets/stock-history-chart/stock-history-chart.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componenets/stock-history-chart/stock-history-chart.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componenets/stock-history-chart/stock-history-chart.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data.length > 0\" [chart]=\"stockChart\"></div>\n\n<div *ngIf=\"data.length === 0\" class=\"top center\">\n    <mat-card>User Don't have stocks in protfolio !</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/componenets/stock-history-chart/stock-history-chart.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componenets/stock-history-chart/stock-history-chart.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StockHistoryChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockHistoryChartComponent", function() { return StockHistoryChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stocks-srv.service */ "./src/app/services/stocks-srv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Highcharts"].setOptions({
    global: {
        useUTC: true,
        timezoneOffset: 0
    }
});
var StockHistoryChartComponent = /** @class */ (function () {
    function StockHistoryChartComponent(stockSrv, activatedRoute) {
        var _this = this;
        this.stockSrv = stockSrv;
        this.activatedRoute = activatedRoute;
        this.data = [];
        this.Highcharts = angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Highcharts"];
        activatedRoute.params.subscribe(function (params) {
            _this.stockSrv.getStockHistoryForChart(params['symbol']).subscribe(function (data) {
                _this.data = data[0];
                _this.stockChart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
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
                            data: _this.data
                        }
                    ]
                });
            });
        });
    }
    StockHistoryChartComponent.prototype.ngOnInit = function () {
    };
    StockHistoryChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-history-chart',
            template: __webpack_require__(/*! ./stock-history-chart.component.html */ "./src/app/componenets/stock-history-chart/stock-history-chart.component.html"),
            styles: [__webpack_require__(/*! ./stock-history-chart.component.css */ "./src/app/componenets/stock-history-chart/stock-history-chart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__["StocksSrvService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StockHistoryChartComponent);
    return StockHistoryChartComponent;
}());



/***/ }),

/***/ "./src/app/componenets/stock-history/stock-history.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componenets/stock-history/stock-history.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    margin-top: 1%;\n  }"

/***/ }),

/***/ "./src/app/componenets/stock-history/stock-history.component.html":
/*!************************************************************************!*\
  !*** ./src/app/componenets/stock-history/stock-history.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n  <mat-progress-spinner></mat-progress-spinner>\n</div>\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- price Column -->\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Price </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.price | number:'1.2-2'}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"createdAt\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Saved At </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | date:'d/M/yy, h:mm a'}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n  <mat-paginator #paginator [length]='totalSize' [pageSize]='pageSize' showFirstLastButtons></mat-paginator>\n\n  <div *ngIf=\"totalSize === 0\" class=\"center\">\n    <mat-card>User didn't commit any transaction!</mat-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/componenets/stock-history/stock-history.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componenets/stock-history/stock-history.component.ts ***!
  \**********************************************************************/
/*! exports provided: StockHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockHistoryComponent", function() { return StockHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stocks-srv.service */ "./src/app/services/stocks-srv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockHistoryComponent = /** @class */ (function () {
    function StockHistoryComponent(stockSrv, activatedRoute) {
        var _this = this;
        this.stockSrv = stockSrv;
        this.activatedRoute = activatedRoute;
        this.displayedColumns = ['symbol',
            'name',
            'price',
            'createdAt'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.stockSymbol = null;
        this.pageSize = 5;
        activatedRoute.params.subscribe(function (params) {
            _this.stockSymbol = params['symbol'];
            //first call to fill the table
            _this.stockSrv.getStockHistory(_this.stockSymbol, 0, _this.pageSize)
                .subscribe(function (data) {
                _this.dataSource.data = data[0];
                _this.totalSize = data[1];
            });
        });
    }
    StockHistoryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.paginator) {
            this.paginator.page.subscribe(function (data) {
                _this.stockSrv.getStockHistory(_this.stockSymbol, data.pageIndex, data.pageSize)
                    .subscribe(function (data) {
                    _this.totalSize = data[1];
                    _this.dataSource.data = data[0];
                });
            });
        }
    };
    StockHistoryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], StockHistoryComponent.prototype, "paginator", void 0);
    StockHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stock-history',
            template: __webpack_require__(/*! ./stock-history.component.html */ "./src/app/componenets/stock-history/stock-history.component.html"),
            styles: [__webpack_require__(/*! ./stock-history.component.css */ "./src/app/componenets/stock-history/stock-history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__["StocksSrvService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StockHistoryComponent);
    return StockHistoryComponent;
}());



/***/ }),

/***/ "./src/app/componenets/stocks-market-chart/stocks-market-chart.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componenets/stocks-market-chart/stocks-market-chart.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\n    margin-top: 1%;\n}"

/***/ }),

/***/ "./src/app/componenets/stocks-market-chart/stocks-market-chart.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/componenets/stocks-market-chart/stocks-market-chart.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data.length > 0\" [chart]=\"stockChart\"></div>\n\n<div *ngIf=\"data.length === 0\" class=\"top center\">\n    <mat-card>User Don't have stocks in protfolio !</mat-card>\n</div>"

/***/ }),

/***/ "./src/app/componenets/stocks-market-chart/stocks-market-chart.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componenets/stocks-market-chart/stocks-market-chart.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StocksMarketChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksMarketChartComponent", function() { return StocksMarketChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var _services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stocks-srv.service */ "./src/app/services/stocks-srv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Highcharts"].setOptions({
    global: {
        useUTC: true,
        timezoneOffset: 0
    }
});
var StocksMarketChartComponent = /** @class */ (function () {
    function StocksMarketChartComponent(stockSrv, activatedRoute) {
        var _this = this;
        this.stockSrv = stockSrv;
        this.activatedRoute = activatedRoute;
        this.Highcharts = angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Highcharts"];
        this.data = [];
        activatedRoute.params.subscribe(function (params) {
            _this.stockSrv.getStocksMarketForChart().subscribe(function (data) {
                _this.data = data;
                _this.stockChart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
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
                    series: _this.data,
                });
            });
        });
    }
    StocksMarketChartComponent.prototype.ngOnInit = function () {
    };
    StocksMarketChartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-market-chart',
            template: __webpack_require__(/*! ./stocks-market-chart.component.html */ "./src/app/componenets/stocks-market-chart/stocks-market-chart.component.html"),
            styles: [__webpack_require__(/*! ./stocks-market-chart.component.css */ "./src/app/componenets/stocks-market-chart/stocks-market-chart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__["StocksSrvService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], StocksMarketChartComponent);
    return StocksMarketChartComponent;
}());



/***/ }),

/***/ "./src/app/componenets/stocks-view/stocks-view.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/componenets/stocks-view/stocks-view.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    padding: 2%;\n  }\n\n.up{\n    color: green;\n}\n\n.down{\n    color: red;\n}\n\n.right{\n    text-align:right;\n    padding-right: 1%;\n}"

/***/ }),

/***/ "./src/app/componenets/stocks-view/stocks-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/componenets/stocks-view/stocks-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n  <mat-progress-spinner></mat-progress-spinner>\n</div>\n\n<mat-tab-group>\n  <mat-tab label=\"Online Market\">\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <!-- price Column -->\n      <ng-container matColumnDef=\"price\">\n        <th class=\"right\" mat-header-cell *matHeaderCellDef mat-sort-header> Price </th>\n        <td class=\"right\" mat-cell *matCellDef=\"let element\"> {{element.price | currency}} </td>\n      </ng-container>\n\n      <!-- priceChangeInDot Column -->\n      <ng-container matColumnDef=\"priceChangeDots\">\n        <th class=\"right\" mat-header-cell *matHeaderCellDef mat-sort-header> Change $</th>\n        <td class=\"right\" mat-cell *matCellDef=\"let element\" [ngClass]=\"checkChangeRaised(element.priceChangeDots)?'up':'down'\">\n        {{element.priceChangeDots | currency}} </td>\n      </ng-container>\n\n      <!-- priceChangeInPercent Column -->\n      <ng-container matColumnDef=\"priceChangePercent\">\n        <th class=\"right\" mat-header-cell *matHeaderCellDef mat-sort-header> Change % </th>\n        <td class=\"right\" mat-cell *matCellDef=\"let element\" [ngClass]=\"checkChangeRaised(element.priceChangeDots)?'up':'down'\">{{element.priceChangePercent\n          | percent:'1.2-2'}}</td>\n      </ng-container>\n\n      <!-- History operation Column -->\n      <ng-container matColumnDef=\"history\">\n        <th class=\"center\" mat-header-cell *matHeaderCellDef> History </th>\n        <td class=\"center\" mat-cell *matCellDef=\"let element\">\n          <button mat-stroked-button color=\"primary\" (click)=goToStockHistory(element)>History</button>\n        </td>\n      </ng-container>\n\n      <!-- Graph operation Column -->\n      <ng-container matColumnDef=\"graph\">\n        <th class=\"center\" mat-header-cell *matHeaderCellDef> Graph </th>\n        <td class=\"center\" mat-cell *matCellDef=\"let element\">\n          <button mat-stroked-button color=\"primary\" (click)=goToChart(element)>Graph</button>\n        </td>\n      </ng-container>\n\n      <!-- Buy operation Column -->\n      <ng-container matColumnDef=\"buyOperation\">\n        <th class=\"center\" mat-header-cell *matHeaderCellDef> Buy </th>\n        <td class=\"center\" mat-cell *matCellDef=\"let element\">\n          <button mat-stroked-button color=\"primary\" (click)=goToBuyStocks(element)>Buy</button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n  </mat-tab>\n  <mat-tab label=\"Market on graph\" >\n      <ng-template matTabContent>\n    <app-stocks-market-chart></app-stocks-market-chart>\n  </ng-template>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/componenets/stocks-view/stocks-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/componenets/stocks-view/stocks-view.component.ts ***!
  \******************************************************************/
/*! exports provided: StocksViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksViewComponent", function() { return StocksViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/stocks-srv.service */ "./src/app/services/stocks-srv.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StocksViewComponent = /** @class */ (function () {
    function StocksViewComponent(stockSrv, router) {
        var _this = this;
        this.stockSrv = stockSrv;
        this.router = router;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.displayedColumns = ['symbol',
            'name',
            'price',
            'priceChangeDots',
            'priceChangePercent',
            'history',
            'graph',
            'buyOperation'
        ];
        this.stockSrv.stocks$.subscribe(function (data) { return _this.dataSource.data = data; });
    }
    // used to make the colors red/green
    StocksViewComponent.prototype.checkChangeRaised = function (dots) {
        if (parseInt(dots) >= 0)
            return true;
        else
            return false;
    };
    StocksViewComponent.prototype.goToStockHistory = function (element) {
        this.router.navigate(['/', 'stock-history', element.symbol]);
    };
    StocksViewComponent.prototype.goToBuyStocks = function (element) {
        this.router.navigate(['/', 'user-trade', element.symbol, 1]);
    };
    StocksViewComponent.prototype.goToChart = function (element) {
        this.router.navigate(['/', 'stock-history-chart', element.symbol]);
    };
    StocksViewComponent.prototype.ngOnInit = function () {
    };
    StocksViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stocks-view',
            template: __webpack_require__(/*! ./stocks-view.component.html */ "./src/app/componenets/stocks-view/stocks-view.component.html"),
            styles: [__webpack_require__(/*! ./stocks-view.component.css */ "./src/app/componenets/stocks-view/stocks-view.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_1__["StocksSrvService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], StocksViewComponent);
    return StocksViewComponent;
}());



/***/ }),

/***/ "./src/app/componenets/success-dialog/success-dialog.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componenets/success-dialog/success-dialog.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componenets/success-dialog/success-dialog.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/componenets/success-dialog/success-dialog.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>You successfuly made a {{data.type}} for {{data.name}} stocks:</h2>\n<mat-dialog-content>\n  <mat-list>\n    <mat-list-item>\n      <h4 mat-line>Price: {{data.price | number:'1.2-2'}}</h4>\n    </mat-list-item>\n    <mat-list-item>\n      <h4 mat-line>Amount: {{data.amount}}</h4>\n      <mat-divider [inset]=\"true\"></mat-divider>\n    </mat-list-item>\n    <mat-list-item>\n      <h4 mat-line>Total: {{data.total | currency}}</h4>\n    </mat-list-item>\n  </mat-list>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>OK</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/componenets/success-dialog/success-dialog.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componenets/success-dialog/success-dialog.component.ts ***!
  \************************************************************************/
/*! exports provided: SuccessDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessDialogComponent", function() { return SuccessDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var SuccessDialogComponent = /** @class */ (function () {
    function SuccessDialogComponent(data) {
        this.data = data;
    }
    SuccessDialogComponent.prototype.ngOnInit = function () {
    };
    SuccessDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success-dialog',
            template: __webpack_require__(/*! ./success-dialog.component.html */ "./src/app/componenets/success-dialog/success-dialog.component.html"),
            styles: [__webpack_require__(/*! ./success-dialog.component.css */ "./src/app/componenets/success-dialog/success-dialog.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], SuccessDialogComponent);
    return SuccessDialogComponent;
}());



/***/ }),

/***/ "./src/app/componenets/user-history/user-history.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/componenets/user-history/user-history.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    margin-top: 1%;\n  }"

/***/ }),

/***/ "./src/app/componenets/user-history/user-history.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/componenets/user-history/user-history.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n    <mat-progress-spinner></mat-progress-spinner>\n  </div>\n\n  <div class=\"mat-elevation-z8\">\n      <table mat-table [dataSource]=\"dataSource\" matSort >\n      \n         <!-- Symbol Column -->\n    <ng-container matColumnDef=\"symbol\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      </ng-container>\n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n    \n      <ng-container matColumnDef=\"amount\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.amount | number:'1.0-0'}} </td>\n        </ng-container>\n  \n      <!-- price Column -->\n      <ng-container matColumnDef=\"price\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Price </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.price | currency}} </td>\n      </ng-container>\n    \n      <!-- operation Column -->\n      <ng-container matColumnDef=\"operation\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header> Operation </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.operation | opTransform}} </td>\n        </ng-container>\n    \n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    \n      <mat-paginator #paginator [length]='totalSize' [pageSize]='pageSize' showFirstLastButtons></mat-paginator>\n      <div *ngIf=\"totalSize === 0\" class=\"center\">\n        <mat-card>User didn't commit any transaction!</mat-card>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/componenets/user-history/user-history.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/componenets/user-history/user-history.component.ts ***!
  \********************************************************************/
/*! exports provided: UserHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHistoryComponent", function() { return UserHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stocks-srv.service */ "./src/app/services/stocks-srv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserHistoryComponent = /** @class */ (function () {
    function UserHistoryComponent(stockSrv, activatedRoute) {
        var _this = this;
        this.stockSrv = stockSrv;
        this.activatedRoute = activatedRoute;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.stockSymbol = null;
        this.pageSize = 5;
        this.displayedColumns = ['symbol',
            'name',
            'amount',
            'price',
            'operation'
        ];
        //first call to fill the table
        this.stockSrv.getUserStockHistory(0, this.pageSize).subscribe(function (data) {
            _this.dataSource.data = data[0];
            _this.totalSize = data[1];
        });
    }
    UserHistoryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.paginator) {
            this.paginator.page.subscribe(function (data) {
                _this.stockSrv.getUserStockHistory(data.pageIndex, data.pageSize).subscribe(function (data) {
                    _this.totalSize = data[1];
                    _this.dataSource.data = data[0];
                });
            });
        }
    };
    UserHistoryComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], UserHistoryComponent.prototype, "paginator", void 0);
    UserHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-history',
            template: __webpack_require__(/*! ./user-history.component.html */ "./src/app/componenets/user-history/user-history.component.html"),
            styles: [__webpack_require__(/*! ./user-history.component.css */ "./src/app/componenets/user-history/user-history.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__["StocksSrvService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserHistoryComponent);
    return UserHistoryComponent;
}());



/***/ }),

/***/ "./src/app/componenets/user-protfolio-graph/user-protfolio-graph.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componenets/user-protfolio-graph/user-protfolio-graph.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/componenets/user-protfolio-graph/user-protfolio-graph.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/componenets/user-protfolio-graph/user-protfolio-graph.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"data.length>0\" class=\"top\" [chart]=\"stockChart\"></div>\n\n<div *ngIf=\"data.length === 0\" class=\"top center\">\n    <mat-card>User Don't have stocks in protfolio !</mat-card>\n  </div>\n"

/***/ }),

/***/ "./src/app/componenets/user-protfolio-graph/user-protfolio-graph.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componenets/user-protfolio-graph/user-protfolio-graph.component.ts ***!
  \************************************************************************************/
/*! exports provided: UserProtfolioGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProtfolioGraphComponent", function() { return UserProtfolioGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/stocks-srv.service */ "./src/app/services/stocks-srv.service.ts");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Highcharts.setOptions(Highcharts.theme);
var UserProtfolioGraphComponent = /** @class */ (function () {
    function UserProtfolioGraphComponent(stockSrv) {
        var _this = this;
        this.stockSrv = stockSrv;
        this.data = [];
        this.stockSrv.getUserStocksForChart().subscribe(function (data) {
            _this.data = data;
            _this.stockChart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
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
                        data: _this.data
                    }]
            });
        });
    }
    UserProtfolioGraphComponent.prototype.ngOnInit = function () {
    };
    UserProtfolioGraphComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-protfolio-graph',
            template: __webpack_require__(/*! ./user-protfolio-graph.component.html */ "./src/app/componenets/user-protfolio-graph/user-protfolio-graph.component.html"),
            styles: [__webpack_require__(/*! ./user-protfolio-graph.component.css */ "./src/app/componenets/user-protfolio-graph/user-protfolio-graph.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_1__["StocksSrvService"]])
    ], UserProtfolioGraphComponent);
    return UserProtfolioGraphComponent;
}());



/***/ }),

/***/ "./src/app/componenets/user-protfolio/user-protfolio.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componenets/user-protfolio/user-protfolio.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n    margin-top: 2%;\n  }\n\n.up{\n    color: green;\n}\n\n.down{\n    color: red;\n}\n\nmat-card{\n    text-align: center;\n}\n\n.right{\n    text-align:right;\n    padding-right: 1%;\n}\n\ntr.mat-footer-row {\n    font-weight: bold;\n  }"

/***/ }),

/***/ "./src/app/componenets/user-protfolio/user-protfolio.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/componenets/user-protfolio/user-protfolio.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Protfolio\">\n\n    <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n      <mat-progress-spinner></mat-progress-spinner>\n    </div>\n\n    <table mat-table [dataSource]=\"dataSource\" matSort class=\"mat-elevation-z8\">\n\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"symbol\">\n        <th color=\"primary\" class=\"center\" mat-header-cell *matHeaderCellDef mat-sort-header> Symbol </th>\n        <td class=\"center\" mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n        <td class=\"center\" mat-footer-cell *matFooterCellDef> Total </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th color=\"primary\" class=\"center\" mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n        <td class=\"center\" mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"amount\">\n        <th color=\"primary\" class=\"right\" mat-header-cell *matHeaderCellDef mat-sort-header> Amount </th>\n        <td class=\"right\" mat-cell *matCellDef=\"let element\"> {{element.amount | number:'1.0-0'}} </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <!-- price Column -->\n      <ng-container matColumnDef=\"price\">\n        <th color=\"primary\" class=\"right\" mat-header-cell *matHeaderCellDef mat-sort-header> Buy Price </th>\n        <td class=\"right\" mat-cell *matCellDef=\"let element\"> {{element.price | currency}} </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <!-- priceChangeInDot Column -->\n      <ng-container matColumnDef=\"priceChangeDots\">\n        <th color=\"primary\" class=\"right\" mat-header-cell *matHeaderCellDef mat-sort-header> Change $</th>\n        <td class=\"right\" mat-cell *matCellDef=\"let element\" [ngClass]=\"checkChangeRaised(element.priceChangeDots)?'up':'down'\">\n          {{element.priceChangeDots | currency}}\n        </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <!-- priceChangeInPercent Column -->\n      <ng-container matColumnDef=\"priceChangePercent\">\n        <th color=\"primary\" class=\"right\" mat-header-cell *matHeaderCellDef mat-sort-header> Change % </th>\n        <td class=\"right\" mat-cell *matCellDef=\"let element\" [ngClass]=\"checkChangeRaised(element.priceChangeDots)?'up':'down'\">{{element.priceChangePercent\n          | percent:'1.2-2'}}</td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <!-- stock value Column -->\n      <ng-container matColumnDef=\"total\">\n          <th color=\"primary\" class=\"right\" mat-header-cell *matHeaderCellDef mat-sort-header> Gain / Lose </th>\n          <td class=\"right\" mat-cell *matCellDef=\"let element\" [ngClass]=\"checkChangeRaised(element.priceChangeDots)?'up':'down'\">{{element.total\n            | currency}}</td>\n          <td class=\"right\" mat-footer-cell *matFooterCellDef [ngClass]=\"checkChangeRaised(getTotalCost())?'up':'down'\"> {{getTotalCost()\n            | currency}} </td>\n        </ng-container>\n\n      <!-- stock gain/lose Column -->\n      <ng-container matColumnDef=\"value\">\n        <th color=\"primary\" class=\"right\" mat-header-cell *matHeaderCellDef mat-sort-header> value </th>\n        <td class=\"right\" mat-cell *matCellDef=\"let element\">{{element.value\n          | currency}}</td>\n        <td class=\"right\" mat-footer-cell *matFooterCellDef > {{getTotalValue()\n          | currency}} </td>\n      </ng-container>\n\n      <!-- Buy operation Column -->\n      <ng-container matColumnDef=\"buyOperation\">\n        <th color=\"primary\" class=\"center\" mat-header-cell *matHeaderCellDef> Buy </th>\n        <td class=\"center\" mat-cell *matCellDef=\"let element\">\n          <button mat-stroked-button color=\"primary\" (click)=goToBuyStocks(element)>Buy</button>\n        </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <!-- sell Column -->\n      <ng-container matColumnDef=\"sellOperation\">\n        <th color=\"primary\" class=\"center\" mat-header-cell *matHeaderCellDef> Sell </th>\n        <td class=\"center\" mat-cell *matCellDef=\"let element\">\n          <button mat-stroked-button color=\"primary\" (click)=goToSellStocks(element)>Sell</button>\n        </td>\n        <td mat-footer-cell *matFooterCellDef></td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n    </table>\n    <div *ngIf=\"dataSource.data.length === 0\">\n      <mat-card>User don't own any stocks!</mat-card>\n    </div>\n\n  </mat-tab>\n\n  <mat-tab label=\"Transactions\">\n    <ng-template matTabContent>\n      <app-user-history></app-user-history>\n    </ng-template>\n  </mat-tab>\n\n  <mat-tab label=\"Graph\">\n    <ng-template matTabContent>\n      <app-user-protfolio-graph></app-user-protfolio-graph>\n    </ng-template>\n  </mat-tab>\n\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/componenets/user-protfolio/user-protfolio.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componenets/user-protfolio/user-protfolio.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProtfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProtfolioComponent", function() { return UserProtfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stocks-srv.service */ "./src/app/services/stocks-srv.service.ts");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserProtfolioComponent = /** @class */ (function () {
    function UserProtfolioComponent(stockSrv, socket, router) {
        var _this = this;
        this.stockSrv = stockSrv;
        this.socket = socket;
        this.router = router;
        this.displayedColumns = ['symbol',
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
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"]();
        this.rawData = [];
        this.getUserProtfolio().subscribe(function (data) {
            _this.dataSource.data = data;
            _this.rawData = data; // used to map the total value
        });
        this.stockSrv.getStocksFromProtfolio().subscribe(function (data) {
            _this.dataSource.data = data;
            _this.rawData = data;
        });
    }
    UserProtfolioComponent.prototype.ngOnDestroy = function () {
        this.socket.removeListener('protfolio');
    };
    UserProtfolioComponent.prototype.getUserProtfolio = function () {
        return this.socket.fromEvent("protfolio");
    };
    // used to make red/green color indicator
    UserProtfolioComponent.prototype.checkChangeRaised = function (dots) {
        if (parseInt(dots) >= 0)
            return true;
        else
            return false;
    };
    UserProtfolioComponent.prototype.goToBuyStocks = function (element) {
        this.router.navigate(['/', 'user-trade', element.symbol, 1]);
    };
    UserProtfolioComponent.prototype.goToSellStocks = function (element) {
        this.router.navigate(['/', 'user-trade', element.symbol, 2]);
    };
    UserProtfolioComponent.prototype.getTotalCost = function () {
        return this.rawData.map(function (t) { return t.total; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    UserProtfolioComponent.prototype.getTotalValue = function () {
        return this.rawData.map(function (v) { return v.value; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    UserProtfolioComponent.prototype.ngOnInit = function () {
    };
    UserProtfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-protfolio',
            template: __webpack_require__(/*! ./user-protfolio.component.html */ "./src/app/componenets/user-protfolio/user-protfolio.component.html"),
            styles: [__webpack_require__(/*! ./user-protfolio.component.css */ "./src/app/componenets/user-protfolio/user-protfolio.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__["StocksSrvService"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserProtfolioComponent);
    return UserProtfolioComponent;
}());



/***/ }),

/***/ "./src/app/componenets/user-trade/user-trade.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/componenets/user-trade/user-trade.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".trade{\n    margin-top: 2% !important;\n    width: 30%;\n    margin: 0 AUTO;\n}\n\nmd-card{\n    font-size: 1.5em !important;    \n}\n\nspan.mat-slider-thumb-label-text {\n    color: black !important;\n}\n\n::ng-deep .mat-slider-thumb-label {\n      -webkit-transform: rotate(45deg) !important;\n              transform: rotate(45deg) !important;\n      border-radius: 50% 50% 0 !important;\n    }\n\n::ng-deep    .mat-slider-thumb {\n      -webkit-transform: scale(0) !important;\n              transform: scale(0) !important;\n    }\n\n::ng-deep   .mat-slider-thumb-label-text {\n      opacity: 1 !important;\n      color: black !important;\n    }\n\n::ng-deep .mat-slider-horizontal{\n        width: 100% !important;\n        display: block !important;\n    }\n\n::ng-deep .slider-label{\n        font-size: 0.8em !important;\n        margin-bottom: 2em !important;\n    }\n\n::ng-deep .mat-card-header-text {\n        margin: 0 auto !important;  \n    }\n\n::ng-deep .mat-card-title{\n        font-size: 1.5em !important;\n    }\n\n::ng-deep .mat-form-field {\n        display: block !important;\n    }"

/***/ }),

/***/ "./src/app/componenets/user-trade/user-trade.component.html":
/*!******************************************************************!*\
  !*** ./src/app/componenets/user-trade/user-trade.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"trade\" *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>{{stock.operation | opTransform}} Stocks</mat-card-title>\n\n    </mat-card-header>\n    <mat-card-content>\n      <p class=\"center\">\n        <mat-form-field>\n          <mat-label>Stock Symbol</mat-label>\n          <input matInput type=\"text\" formControlName='symbol'>\n        </mat-form-field>\n      </p>\n      <p class=\"center\">\n        <mat-form-field>\n          <mat-label>Stock Name</mat-label>\n          <input matInput type=\"text\" formControlName='name'>\n        </mat-form-field>\n      </p>\n      <p class=\"center\">\n        <mat-form-field>\n          <mat-label>Stock Price</mat-label>\n          <input matInput type=\"text\" formControlName='price'>\n          <span matPrefix>$&nbsp;</span>\n        </mat-form-field>\n      </p>\n\n      <p class=\"center\">\n        <mat-form-field *ngIf=\"stock.operation==1\">\n          <mat-label>Stock Amount</mat-label>\n          <input [errorStateMatcher]=\"matcher\" matInput type=\"text\" formControlName='amount'>\n          \n          <mat-hint>How many stocks you wishes to buy?</mat-hint>\n          <mat-error *ngIf=\"form.get('amount').hasError('forbiddenNumber') && !form.get('amount').hasError('required')\">\n              Please enter a valid stocks amount\n            </mat-error>\n            <mat-error *ngIf=\"form.get('amount').hasError('required')\">\n              Amount is <strong>required</strong>\n            </mat-error>\n        </mat-form-field>\n      </p>\n\n      <p *ngIf=\"stock.operation==2\"  class=\"slider-label\">\n        <mat-label>Amount of stocks to sell:</mat-label>\n      </p>\n      <p *ngIf=\"stock.operation==2\">\n\n        <mat-slider formControlName='amount' *ngIf=\"stock.operation==2\" [max]=\"stock.amount\" [min]=\"0\" [step]=\"1\" [thumbLabel]=\"true\"\n          [tickInterval]=\"1\" [displayWith]=\"formatLabel\"></mat-slider>\n      </p>\n    </mat-card-content>\n    <mat-card-actions class=\"center\">\n      <button mat-raised-button color=\"primary\" type=\"submit\">Commit</button>\n      <button mat-raised-button color=\"primary\" (click)=\"cancel()\">Cancel</button>\n    </mat-card-actions>\n  </mat-card>\n</form>"

/***/ }),

/***/ "./src/app/componenets/user-trade/user-trade.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/componenets/user-trade/user-trade.component.ts ***!
  \****************************************************************/
/*! exports provided: MyErrorStateMatcher, UserTradeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTradeComponent", function() { return UserTradeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/stocks-srv.service */ "./src/app/services/stocks-srv.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../success-dialog/success-dialog.component */ "./src/app/componenets/success-dialog/success-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// used for amount validation
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var UserTradeComponent = /** @class */ (function () {
    function UserTradeComponent(stockSrv, fb, dialog, activatedRoute, router) {
        var _this = this;
        this.stockSrv = stockSrv;
        this.fb = fb;
        this.dialog = dialog;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.matcher = new MyErrorStateMatcher();
        this.activatedRoute.params.subscribe(function (params) {
            _this.stock = null;
            _this.stockSrv.stocks$.subscribe(function (stocks) {
                var currentStock = stocks.filter(function (stock) { return stock.symbol.includes(params['symbol']); });
                // first time enter to form
                if (!_this.stock) {
                    // check if buy operation
                    if (parseInt(params['operation'], 10) === 1) {
                        _this.stock = {
                            symbol: currentStock[0].symbol,
                            name: currentStock[0].name,
                            price: currentStock[0].price,
                            operation: 1,
                            amount: 0
                        };
                        _this.setForm();
                    }
                    else {
                        _this.stockSrv.getStockFromProtfolio(currentStock[0].symbol).subscribe(function (userStock) {
                            // if (userStock) {
                            _this.stock = {
                                symbol: currentStock[0].symbol,
                                name: currentStock[0].name,
                                price: currentStock[0].price,
                                operation: 2,
                                amount: parseInt(userStock[0].amount)
                            };
                            _this.setForm();
                            // }
                            // else {
                            //   console.log('user dont poses this stock')
                            // }
                        });
                    }
                }
                else {
                    _this.stock.name = currentStock[0].name;
                    _this.stock.symbol = currentStock[0].symbol;
                    _this.stock.price = currentStock[0].price;
                    _this.stock.operation = parseInt(params['operation'], 10);
                    _this.form.controls.symbol.setValue(currentStock[0].symbol);
                    _this.form.controls.name.setValue(currentStock[0].name);
                    _this.form.controls.price.setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatNumber"])(currentStock[0].price, 'en-US', '1.2-2'));
                    _this.form.controls.operation.setValue(_this.stock.operation);
                }
            });
        });
    }
    UserTradeComponent.prototype.setForm = function () {
        this.form = this.fb.group({
            symbol: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.stock.symbol, disabled: true }),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: this.stock.name, disabled: true }),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.stock.amount, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.forbiddenNumberValidator(/^[1-9][0-9]*$/)]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["formatNumber"])(this.stock.price, 'en-US', '1.2-2'), disabled: true }),
            operation: [this.stock.operation]
        });
    };
    // custom validator for number in regEX
    UserTradeComponent.prototype.forbiddenNumberValidator = function (numberRe) {
        return function (control) {
            var forbidden = !numberRe.test(control.value);
            return forbidden ? { 'forbiddenNumber': { value: control.value } } : null;
        };
    };
    UserTradeComponent.prototype.cancel = function () {
        this.router.navigate(['/', 'user-protfolio']);
    };
    UserTradeComponent.prototype.save = function () {
        var _this = this;
        if (this.form.valid) {
            this.stock.amount = parseInt(this.form.get('amount').value);
            var data_1 = {
                type: this.stock.operation === 1 ? 'buy' : 'sell',
                name: this.stock.name,
                amount: this.stock.amount,
                price: this.stock.price,
                total: this.stock.price * this.stock.amount
            };
            if (this.stock.operation === 1) {
                this.stockSrv.buyStocks(this.stock).subscribe(function (x) {
                    _this.dialog.open(_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SuccessDialogComponent"], { data: data_1 }).afterClosed().subscribe(function () {
                        _this.router.navigate(['/', 'user-protfolio']);
                    });
                });
            }
            else {
                this.stockSrv.sellStocks(this.stock).subscribe(function (x) {
                    _this.dialog.open(_success_dialog_success_dialog_component__WEBPACK_IMPORTED_MODULE_6__["SuccessDialogComponent"], { data: data_1 }).afterClosed().subscribe(function () {
                        _this.router.navigate(['/', 'user-protfolio']);
                    });
                    ;
                });
            }
        }
    };
    // used to sell slider format for big numbers
    UserTradeComponent.prototype.formatLabel = function (value) {
        if (!value) {
            return 0;
        }
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return value;
    };
    UserTradeComponent.prototype.ngOnInit = function () {
    };
    UserTradeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-trade',
            template: __webpack_require__(/*! ./user-trade.component.html */ "./src/app/componenets/user-trade/user-trade.component.html"),
            styles: [__webpack_require__(/*! ./user-trade.component.css */ "./src/app/componenets/user-trade/user-trade.component.css")]
        }),
        __metadata("design:paramtypes", [_services_stocks_srv_service__WEBPACK_IMPORTED_MODULE_2__["StocksSrvService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserTradeComponent);
    return UserTradeComponent;
}());



/***/ }),

/***/ "./src/app/pipes/op-transform.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/pipes/op-transform.pipe.ts ***!
  \********************************************/
/*! exports provided: OpTransformPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OpTransformPipe", function() { return OpTransformPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OpTransformPipe = /** @class */ (function () {
    function OpTransformPipe() {
    }
    OpTransformPipe.prototype.transform = function (value, args) {
        if (value == 1)
            return 'Buy';
        else
            return 'Sell';
    };
    OpTransformPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'opTransform'
        })
    ], OpTransformPipe);
    return OpTransformPipe;
}());



/***/ }),

/***/ "./src/app/routing/app.routing.ts":
/*!****************************************!*\
  !*** ./src/app/routing/app.routing.ts ***!
  \****************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _componenets_stocks_view_stocks_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../componenets/stocks-view/stocks-view.component */ "./src/app/componenets/stocks-view/stocks-view.component.ts");
/* harmony import */ var _componenets_user_protfolio_user_protfolio_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../componenets/user-protfolio/user-protfolio.component */ "./src/app/componenets/user-protfolio/user-protfolio.component.ts");
/* harmony import */ var _componenets_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../componenets/user-history/user-history.component */ "./src/app/componenets/user-history/user-history.component.ts");
/* harmony import */ var _componenets_stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../componenets/stock-history/stock-history.component */ "./src/app/componenets/stock-history/stock-history.component.ts");
/* harmony import */ var _componenets_user_trade_user_trade_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../componenets/user-trade/user-trade.component */ "./src/app/componenets/user-trade/user-trade.component.ts");
/* harmony import */ var _componenets_stock_history_chart_stock_history_chart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../componenets/stock-history-chart/stock-history-chart.component */ "./src/app/componenets/stock-history-chart/stock-history-chart.component.ts");






var ROUTES = [
    {
        path: 'stocks-view', component: _componenets_stocks_view_stocks_view_component__WEBPACK_IMPORTED_MODULE_0__["StocksViewComponent"]
    },
    {
        path: 'user-protfolio', component: _componenets_user_protfolio_user_protfolio_component__WEBPACK_IMPORTED_MODULE_1__["UserProtfolioComponent"]
    },
    {
        path: 'user-history', component: _componenets_user_history_user_history_component__WEBPACK_IMPORTED_MODULE_2__["UserHistoryComponent"]
    },
    {
        path: 'stock-history/:symbol', component: _componenets_stock_history_stock_history_component__WEBPACK_IMPORTED_MODULE_3__["StockHistoryComponent"]
    },
    {
        path: 'user-trade/:symbol/:operation', component: _componenets_user_trade_user_trade_component__WEBPACK_IMPORTED_MODULE_4__["UserTradeComponent"]
    },
    {
        path: 'stock-history-chart/:symbol', component: _componenets_stock_history_chart_stock_history_chart_component__WEBPACK_IMPORTED_MODULE_5__["StockHistoryChartComponent"]
    },
    { path: '', pathMatch: 'full', redirectTo: '/' }
];


/***/ }),

/***/ "./src/app/services/stocks-srv.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/stocks-srv.service.ts ***!
  \************************************************/
/*! exports provided: StocksSrvService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StocksSrvService", function() { return StocksSrvService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "./node_modules/ngx-socket-io/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StocksSrvService = /** @class */ (function () {
    function StocksSrvService(http, socket) {
        var _this = this;
        this.http = http;
        this.socket = socket;
        this.stocks$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        // subscribe to market stocks price change when socket emit from server
        this.getStocks().subscribe(function (results) {
            _this.stocks$.next(results);
        });
        // used for first time before socket emits the data
        this.getStocksFromMarket().subscribe(function (results) {
            _this.stocks$.next(results);
        });
    }
    // used to get data of the market from the socket
    StocksSrvService.prototype.getStocks = function () {
        return this.socket.fromEvent("update");
    };
    // used to get data of the market for first time before socket emit from server
    StocksSrvService.prototype.getStocksFromMarket = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/stocks/");
    };
    StocksSrvService.prototype.getStockFromProtfolio = function (symbol) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/protfolio/" + symbol);
    };
    StocksSrvService.prototype.getStocksFromProtfolio = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/protfolio/");
    };
    StocksSrvService.prototype.getStockHistory = function (symbol, pageIndex, pageSize) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/stocks/history/" + symbol + "?page=" + pageIndex + "&size=" + pageSize);
    };
    // getStockHistoryCount(symbol: string): Observable<number> {
    //   return this.http.get<number>(`${environment.API_URL}/api/stocks/history-count/${symbol}`);
    // }
    StocksSrvService.prototype.getStockHistoryForChart = function (symbol) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/stocks/history-chart/" + symbol);
    };
    StocksSrvService.prototype.getStocksMarketForChart = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/stocks/history-charts/");
    };
    StocksSrvService.prototype.getUserStocksForChart = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/user-info/user-protfolio-chart/");
    };
    StocksSrvService.prototype.getUserStockHistory = function (pageIndex, pageSize) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/user-info/transactions/?page=" + pageIndex + "&size=" + pageSize);
    };
    StocksSrvService.prototype.buyStocks = function (stock) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/protfolio/buy", stock);
    };
    StocksSrvService.prototype.sellStocks = function (stock) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].API_URL + "/api/protfolio/sell", stock);
    };
    StocksSrvService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]])
    ], StocksSrvService);
    return StocksSrvService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_URL: 'http://localhost:3002'
    //`${process.env.BASE_URL}` ||
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/aainouz/project/stocksClient/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map