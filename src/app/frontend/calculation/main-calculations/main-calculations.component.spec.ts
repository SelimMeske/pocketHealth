import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCalculationsComponent } from './main-calculations.component';

describe('MainCalculationsComponent', () => {
  let component: MainCalculationsComponent;
  let fixture: ComponentFixture<MainCalculationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCalculationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCalculationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
