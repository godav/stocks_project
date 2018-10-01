import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationSrvService {

  errors$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  notifyError(isError) {
    this.errors$.next(isError);
  }
}