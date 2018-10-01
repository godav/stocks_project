import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationSrvService } from './services/notification-service/notification-srv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stocksClient';

  showNotification: boolean;

  constructor(
    private notificationService: NotificationSrvService,
  ) { }

  ngOnInit() {
    this.notificationService
      .errors$
      .subscribe(isError => {
        this.showNotification = isError;
      });
  }

}
