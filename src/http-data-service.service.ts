import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpDataServiceService {

  private albumUrl = "https://jsonplaceholder.typicode.com/albums";
  private pictureUrl = "https://jsonplaceholder.typicode.com/photos";

  constructor(private _http: HttpClient) { }

  getAlbums(): Observable<any>{
    return this._http.get(this.albumUrl);
  }

  getPicturesByAlbumId(_albumId: string): Observable<any>{
      let  params1 = new HttpParams().set('albumId', _albumId);

    return this._http.get(this.pictureUrl, {params:params1});
  }

}