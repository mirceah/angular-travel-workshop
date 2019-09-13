import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'meTravel';

  destination = {
      name: 'Minas Tirith',
      summary: 'Fortified capital of the kingdom of Gondor',
      description: 'Minas Tirith covered the entire Hill of Guard. You will see well preserved weapon chambers , climb through the seven levels all the way up to the Citadel where you can feast at the lovely Isildur restaurant, just like kings used to',
      price: 4800,
      isFavorite: false,
    };
}
