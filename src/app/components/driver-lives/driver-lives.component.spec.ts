import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverLivesComponent } from './driver-lives.component';

describe('DriverLivesComponent', () => {
  let component: DriverLivesComponent;
  let fixture: ComponentFixture<DriverLivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverLivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverLivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
