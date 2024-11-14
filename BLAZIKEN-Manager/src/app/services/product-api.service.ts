import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  private baseURL: string = "http://localhost:8081"

  constructor(
    private _httpClient : HttpClient
  ) { }

  createProduct(product: object): Observable<object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }) 
    console.log(product)
    return this._httpClient.post(`${this.baseURL}/product`, product, { headers })
  }

}
