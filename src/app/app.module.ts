import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { DataListComponent } from './data-list/data-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, DataListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
