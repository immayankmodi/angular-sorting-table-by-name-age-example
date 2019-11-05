import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sortTableSubject: Subject<string> = new Subject<string>();
  
  emitEvent($event) {
    this.sortTableSubject.next($event);
  }
}
