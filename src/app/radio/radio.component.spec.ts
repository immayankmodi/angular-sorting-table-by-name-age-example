import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RadioComponent } from './radio.component';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));


  it('should change model state with respective button click', () => {
    const fixture = TestBed.createComponent(RadioComponent);
    const button = fixture.debugElement.nativeElement.querySelector("input[value='name']");
    const app = fixture.componentInstance;
    button.click();
    fixture.whenStable().then(() => {
      expect(app.model.sortBy).toEqual("name");
    });

  });
});
