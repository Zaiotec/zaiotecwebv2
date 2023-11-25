import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from 'ngx-cookie-service';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

private secretKey: string = 'wnyZDRanmi'; 
urlBase="https://t1d5znexu9.execute-api.us-east-1.amazonaws.com/desarrollo";
nombreGalleta = "sessionZaioTec";  

constructor(private http: HttpClient,private cookieService: CookieService) { }


  getSaludo(): Observable<any>{
    return this.http.get(this.urlBase+"/saludo");
  }
  login(json:any): Observable<any>{
    return this.http.post(this.urlBase+"/login",json);
  }

  registro(json:any): Observable<any>{
    return this.http.post(this.urlBase+"/createuser",json);
  }
  
  validar(json:any) :Observable<any>{
    return this.http.post(this.urlBase+"/enviarmail",json);
  }

  restablecer(json:any): Observable<any>{
    return this.http.post(this.urlBase+"/enviarmailpass",json);
  }


  saveSession(json : any){
    
    this.cookieService.set( this.nombreGalleta,JSON.stringify(json) );
  }

  getSession(){
    if(this.cookieService.get(this.nombreGalleta) != ""){
      return JSON.parse(this.cookieService.get(this.nombreGalleta));
    }
    return "";
  }


  deleteSession(){
    this.cookieService.delete(this.nombreGalleta);
  }
  

  encrypt(text: string): string {
    const encrypted = CryptoJS.AES.encrypt(text, this.secretKey);
    return encrypted.toString();
  }

  decrypt(ciphertext: string): string {
    const decrypted = CryptoJS.AES.decrypt(ciphertext, this.secretKey);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}


