import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from "@angular/material";

import { AppComponent } from './app.component';
import { FavoriteDestinationComponent } from './favorite-destination/favorite-destination.component';
import { DestinationDetailsComponent } from './destination-details/destination-details.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule ],
  declarations: [ AppComponent, FavoriteDestinationComponent, DestinationDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
