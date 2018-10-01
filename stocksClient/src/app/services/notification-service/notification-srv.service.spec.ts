import { TestBed, inject } from '@angular/core/testing';

import { NotificationSrvService } from './notification-srv.service';

describe('NotificationSrvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationSrvService]
    });
  });

  it('should be created', inject([NotificationSrvService], (service: NotificationSrvService) => {
    expect(service).toBeTruthy();
  }));
});
