import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-destination-summary',
  templateUrl: './destination-summary.component.html',
  styleUrls: ['./destination-summary.component.css']
})
export class DestinationSummaryComponent implements OnInit {
  @Input() destination;

  constructor() { }

  ngOnInit() {
  }

}