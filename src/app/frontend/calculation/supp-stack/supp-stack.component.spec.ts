import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppStackComponent } from './supp-stack.component';

describe('SuppStackComponent', () => {
  let component: SuppStackComponent;
  let fixture: ComponentFixture<SuppStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
