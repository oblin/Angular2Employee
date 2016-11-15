// home.component.ts
import { Component } from '@angular/core';
import { FormPoster } from '../services/form-poster.service';
// primeng
import { Message } from 'primeng/primeng';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  providers: [FormPoster]
})
export class HomeComponent {
  msgs: Message[] = [];
  languages = [];

  constructor(private poster: FormPoster) {
    this.poster.getLanguages()
      .subscribe(
        data => this.languages = data,
        error => this.msgs.push({severity:'error', summary:'Get Language Error', detail:error})
      )      
  }

  leave(value) {
    console.log("leave: " + value);
    this.msgs.push({severity:'info', summary:'Info Message', detail:"I'm Leaving"});
  }

  startDate: Date;
  startTime = new Date('Oct 1 2016 3:00 PM');
  onOffSwitch = 'off';
  taxType = 'W2';
  postRating = 5;
  hover(value) {
    console.log("hover: " + value);
    this.msgs = [];
  }
}
