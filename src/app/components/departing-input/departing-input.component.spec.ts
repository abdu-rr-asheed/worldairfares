import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartingInputComponent } from './departing-input.component';

describe('DepartingInputComponent', () => {
  let component: DepartingInputComponent;
  let fixture: ComponentFixture<DepartingInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartingInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartingInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
