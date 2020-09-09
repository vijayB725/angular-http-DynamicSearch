import { Component, OnInit } from "@angular/core";
import { HttpDataServiceService } from "../../http-data-service.service";
import { album } from "../../app.album.model";
import { picture } from "../app.picture.model";

@Component({
  selector: "app-data-list",
  templateUrl: "./data-list.component.html",
  styleUrls: ["./data-list.component.css"]
})
export class DataListComponent implements OnInit {

  private albumList: album[];
  private albumSelected: number;
  private pictureList: picture[];

  constructor(private _dataService: HttpDataServiceService) {}

  ngOnInit() {
    this._dataService.getAlbums().subscribe(data => (this.albumList = data));
  }
}
