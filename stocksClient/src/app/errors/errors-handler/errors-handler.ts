import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { StocksSrvService } from '../../services/stocks-service/stocks-srv.service';
import { NotificationSrvService } from '../../services/notification-service/notification-srv.service';

@Injectable()
export class ErrorsHandler implements ErrorHandler {
    constructor(
        private injector: Injector,
    ) { }

    handleError(error: Error | HttpErrorResponse) {
        const notificationSrv = this.injector.get(NotificationSrvService);
        const router = this.injector.get(Router);
        console.log('ininin')
        if (error instanceof HttpErrorResponse) {
            // Server error happened      
            if (!navigator.onLine) {
                // No Internet connection
                router.navigate(['/error'], { queryParams: { name: 'Conectivity problem', message: 'No Internet Connection' } });
            } else {
                // Http Error
                router.navigate(['/error'], { queryParams: { name: error.name, message: error.message } });
            }
        } else {
            // Client Error Happend     
            router.navigate(['/error'], { queryParams: { name: 'App error', message: 'Please try to reach godav' } });
        }
        // Log the error anyway
        notificationSrv.notifyError(true);
    }
}
