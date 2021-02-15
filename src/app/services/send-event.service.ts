import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SendEventService {
  private subject = new Subject<any>();

  // tslint:disable: typedef
  sendEvent() {
    this.subject.next();
  }
  getEvent(): Observable<any>{
    return this.subject.asObservable();
  }
}
