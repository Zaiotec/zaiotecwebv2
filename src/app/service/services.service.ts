import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
urlBase="https://t1d5znexu9.execute-api.us-east-1.amazonaws.com/desarrollo";
  constructor(private http: HttpClient) { }
  getSaludo(): Observable<any>{
    return this.http.get(this.urlBase+"/saludo");
  }
  login(json:any): Observable<any>{
    return this.http.post(this.urlBase+"/login",json);
  }

}
