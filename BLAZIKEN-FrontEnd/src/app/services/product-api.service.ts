import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductAPIService {

  private baseURL: string = "http://localhost:8081"

  constructor(
    private _httpClient: HttpClient
  ) { }

  getProduct(): Observable<Object>{
    return this._httpClient.get(`${this.baseURL}/products`)
  }

}
