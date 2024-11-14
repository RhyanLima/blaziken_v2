import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAPIService {

  private baseURL: string = "http://localhost:8081"

  constructor(
    private _httpClient: HttpClient
  ) { }

  getUser(): Observable<Object>{
    return this._httpClient.get(`${this.baseURL}/users`)
  }

  createUser(user: object): Observable<object>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    }) 
    console.log(user)
    return this._httpClient.post(`${this.baseURL}/user`, user, { headers })
  }

}
