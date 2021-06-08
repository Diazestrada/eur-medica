import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

import { CONFIG } from '../config'

@Injectable({
  providedIn: 'root'
})
export class EpsProvaiderService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllEps<T>():Observable<T> {
    return this.http.get<T>(CONFIG.apiUrl + CONFIG.paths.getEpsAll)
  }
}
