import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from '../radio/radio.component';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();
  }));



  it('Selecting name radio button should correctly sort table by name', () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.componentInstance;
    app.sortBy = "name";
    app.arrangeItems();
    fixture.detectChanges();
    expect(app.birthdays).toEqual([{ name: "Alexander Alfred", birth: "02/09/1891" },
      { name: "Barcy Washington", birth: "09/16/1992" },
      { name: "Jimmy Shergil", birth: "12/12/2001" },
      { name: "John Sina", birth: "11/30/2011" },
      { name: "Krishna Gupta", birth: "12/01/1982" },
      { name: "Lata Pathak", birth: "10/31/1999" },
      { name: "Peter Parker", birth: "01/16/1992" },
      { name: "Sania Mirza", birth: "11/30/2011" }]);
  });

  it('Selecting age radio button should correctly sort table by age', () => {
    const fixture = TestBed.createComponent(TableComponent);
    const app = fixture.componentInstance;
    app.sortBy = "age";
    app.arrangeItems();
    fixture.detectChanges();
    expect(app.birthdays).toEqual([{ name: "Alexander Alfred", birth: "02/09/1891" },
      { name: "Krishna Gupta", birth: "12/01/1982" },
      { name: "Peter Parker", birth: "01/16/1992" },
      { name: "Barcy Washington", birth: "09/16/1992" },
      { name: "Lata Pathak", birth: "10/31/1999" },
      { name: "Jimmy Shergil", birth: "12/12/2001" },
      { name: "John Sina", birth: "11/30/2011" },
      { name: "Sania Mirza", birth: "11/30/2011" }]);
  });

  
});
