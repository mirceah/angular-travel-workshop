import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  testimonials = [
    {
      name: 'Gandalf',
      message: 'Am venit aici-şea, că... vroiam să... aflăm aici-şea ce se petrece aici-şea, că e prima dată care am venit aici-şea'
    },
    {
      name: 'Sauron',
      message: 'Caut un inel, dar nu gasesc. Inel cu inscriptia: "ash nazg thrakatulûk, agh burzum-ishi krimpatul". Toata lumea sa apeleze la mine. Ofer recompensa!'
    },
  ];

}