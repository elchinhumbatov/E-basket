import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadJSONService {
  constructor(private http: HttpClient) { }

  loadJson(): Observable<any> {
    return this.http.get('./assets/myjson.json');
  }
}
