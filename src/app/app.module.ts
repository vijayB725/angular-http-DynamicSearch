import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { DataListComponent } from './data-list/data-list.component';
import {TableModule} from 'primeng/table';
import { CustomSearchComponent } from './custom-search/custom-search.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, TableModule ],
  declarations: [ AppComponent, HelloComponent, DataListComponent, CustomSearchComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
