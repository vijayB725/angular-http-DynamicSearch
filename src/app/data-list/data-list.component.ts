import { Component, OnInit } from '@angular/core';
import { HttpDataServiceService } from '../../http-data-service.service';


@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  constructor( private _dataService: HttpDataServiceService) { }

  ngOnInit() {   
    this._dataService.getData().subscribe(
      data => console.log(JSON.stringify(data))
    )   
    }
  }
