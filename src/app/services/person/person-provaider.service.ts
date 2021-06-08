import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { CONFIG } from '../config'

@Injectable({
  providedIn: 'root'
})
export class PersonProvaiderService {

  constructor(
    private http: HttpClient
  ) { }

  public createPerson<T>(data: any): Observable<T> {
    const headers = { 'content-type': 'application/json' }
    return this.http.post<T>(CONFIG.apiUrl + CONFIG.paths.createPerson, data, { 'headers': headers })
  }
  public getAllPerson<T>(): Observable<T> {
    const headers = { 'content-type': 'application/json' }
    return this.http.get<T>(CONFIG.apiUrl + CONFIG.paths.getAllPerson, { 'headers': headers })
  }
}
