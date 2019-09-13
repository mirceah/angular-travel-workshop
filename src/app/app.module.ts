import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material";

import { AppComponent } from './app.component';
import { FavoriteDestinationComponent } from './favorite-destination/favorite-destination.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule ],
  declarations: [ AppComponent, FavoriteDestinationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
