import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpDataServiceService {

  private apiUrl = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo";

  constructor(private _http: HttpClient) { }

  getData(){
    return this._http.get(this.apiUrl);
  }

}