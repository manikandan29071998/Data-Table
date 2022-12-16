import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {

  constructor(private http:HttpClient) { }

  getapidata(): Observable<any>{
    return this.http.get<any>('./assets/fakeApi.json')
  }
}
