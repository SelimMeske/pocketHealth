import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyTypeTextComponent } from './body-type-text.component';

describe('BodyTypeTextComponent', () => {
  let component: BodyTypeTextComponent;
  let fixture: ComponentFixture<BodyTypeTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyTypeTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyTypeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
