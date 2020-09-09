import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpDataServiceService {

  private albumUrl = "https://jsonplaceholder.typicode.com/albums";
  constructor(private _http: HttpClient) { }

  getData(): Observable<any>{
    return this._http.get(this.albumUrl);
  }

}