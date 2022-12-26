import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable, retry, catchError } from 'rxjs';
import { environment } from '../environments/environment';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  private _url:string = environment.API_SERVER_URL+"/offers";

  constructor(private http:HttpClient) { }
   headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')
  .set('content-type','application/x-www-form-urlencoded');

  handleError(error:any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => {
        return errorMessage;
    });
  }

  getAlloffers():Observable<any>{
    console.log(this.http.get<any>(this._url,{headers:this.headers}));
    return this.http.get<any>(this._url,{headers:this.headers})
                    .pipe(retry(1),catchError(this.handleError));
  }

  addOffer(data:any){
    return this.http.post(this._url,data)
                    .pipe(catchError(this.handleError));
  }

  getById(id:any){
    return this.http.get<any>(this._url+'/'+id,{headers:this.headers})
                    .pipe(retry(1),catchError(this.handleError));
  }

  updateById(id:any,data:any){
    return this.http.put(this._url+'/'+id,data)
                    .pipe(catchError(this.handleError));
  }
}
