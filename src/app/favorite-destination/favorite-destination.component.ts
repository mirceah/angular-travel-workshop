import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-destination',
  templateUrl: './favorite-destination.component.html',
  styleUrls: ['./favorite-destination.component.css']
})
export class FavoriteDestinationComponent {
  @Input() isFavorite = false;
}