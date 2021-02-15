import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEventService1 {
  private subject = new Subject<any>();

  // tslint:disable: typedef
  sendEvent(data) {
    this.subject.next(data);
  }
  getEvent() {
    // return this.subject.asObservable();
    return this.subject;
  }
}
