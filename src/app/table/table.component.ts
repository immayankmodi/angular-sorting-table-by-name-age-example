import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Subject } from "rxjs";
import { RadioComponent } from '../radio/radio.component';

@Component({
  selector: 'app-table',
  providers: [RadioComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  @Input() sortTableSubject: Subject<string> = new Subject<string>();

  birthdays = [
    {
      name: "John Sina",
      birth: "11/30/2011"
    }, {
      name: "Barcy Washington",
      birth: "09/16/1992"
    }, {
      name: "Peter Parker",
      birth: "01/16/1992"
    }, {
      name: "Jimmy Shergil",
      birth: "12/12/2001"
    }, {
      name: "Alexander Alfred",
      birth: "02/09/1891"
    }, {
      name: "Krishna Gupta",
      birth: "12/01/1982"
    }, {
      name: "Sania Mirza",
      birth: "11/30/2011"
    }, {
      name: "Lata Pathak",
      birth: "10/31/1999"
    }
  ];
  
  @Input() sortBy: string;
  constructor(private radio: RadioComponent) {
    this.sortBy = radio.returnModelState();
  }

  ngOnInit() {
    this.sortTableSubject.subscribe(sortType => {
      this.sortBy = sortType;
      this.arrangeItems();
    });
  }

  arrangeItems() {
    if (this.sortBy == "name") {
      this.sortByName();
    } else if (this.sortBy == "age") {
      this.sortByAge();
    }
  }

  sortByName() {
    this.birthdays.sort((a, b) => (a.name > b.name) ? 1 : -1);
  }
  
  sortByAge() {
    this.birthdays.forEach(function (obj, i) {
      let birth = new Date(obj.birth);
      let now = new Date();
      let ageInDays = Math.floor((<any>now - <any>birth) / 86400000);
      obj["age"] = ageInDays;
    });
    
    this.birthdays.sort((a, b) => (a["age"] != b["age"] ? (a["age"] < b["age"]) : (<any>a["name"] >= <any>b["name"])) ? 1 : -1);
    this.birthdays.forEach(function (obj, i) {
      delete obj["age"];
    });
  }

}
