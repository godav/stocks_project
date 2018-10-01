import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationSrvService } from '../../services/notification-service/notification-srv.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  routeParams;

  constructor(
    private activatedRoute: ActivatedRoute,private router: Router,
    private notificationSrv:NotificationSrvService
  ) { 

    
  }

  tryAgain() {
    this.notificationSrv.notifyError(false);
    this.router.navigate(['/']);
  }

  ngOnInit() {
    this.routeParams = this.activatedRoute.snapshot.queryParams;
  }

}
