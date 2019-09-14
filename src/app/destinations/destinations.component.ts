import { Component, OnInit } from '@angular/core';
import { DestinationsService } from '../destinations.service'

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css']
})
export class DestinationsComponent implements OnInit {

  isList = false;
  destinations = [];

  toggleDisplay() {    
    this.isList = !this.isList;
  }

  constructor(private destinationsService: DestinationsService) {}

  ngOnInit() {
    this.destinations = this.destinationsService.destinations;
  }

}