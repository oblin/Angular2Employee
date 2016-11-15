// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  startDate: Date;
  startTime = new Date('Oct 1 2016 3:00 PM');
  onOffSwitch = 'off';
  taxType = 'W2';
  postRating = 5;

  hover(value) {
    console.log("hover: " + value);
  }

  leave(value) {
    console.log("leave: " + value);
  }
}
