import { Component, OnInit } from '@angular/core';
import { DestinationsService } from './destinations.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'meTravel';
  isList = false;
  destinations = [];

  toggleDisplay() {    
    this.isList = !this.isList;
  }

  constructor(private destinationsService: DestinationsService) {}

  ngOnInit() {
    this.destinations = this.destinationsService.getDestinations();
  }
}
