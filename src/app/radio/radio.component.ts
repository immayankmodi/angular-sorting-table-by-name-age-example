import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radio',
  providers: [RadioComponent],
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  model;
  constructor() {
    this.model = {
      sortBy: ""
    }
  }

  @Output() event: EventEmitter<string> = new EventEmitter();

  changeSortBy(val: string) {    
    this.model.sortBy = val;
    this.event.emit(this.returnModelState());
  }

  returnModelState() {
    return this.model.sortBy;
  }
}
