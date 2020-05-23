import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloricNeedsComponent } from './caloric-needs.component';

describe('CaloricNeedsComponent', () => {
  let component: CaloricNeedsComponent;
  let fixture: ComponentFixture<CaloricNeedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaloricNeedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaloricNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
