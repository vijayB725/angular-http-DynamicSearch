import { Component, OnInit } from '@angular/core';
import { HttpDataServiceService } from '../../http-data-service.service';
import { picture } from "../app.picture.model";

@Component({
  selector: 'app-custom-search',
  templateUrl: './custom-search.component.html',
  styleUrls: ['./custom-search.component.css']
})
export class CustomSearchComponent implements OnInit {

  private searchText : string;
  private photoResult: picture[];

  constructor(private _dataService: HttpDataServiceService) { }

  ngOnInit() {
    this._dataService.customSearch(this.searchText).subscribe(data => console.log(data));
  }

}