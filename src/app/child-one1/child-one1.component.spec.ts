import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildOne1Component } from './child-one1.component';

describe('ChildOne1Component', () => {
  let component: ChildOne1Component;
  let fixture: ComponentFixture<ChildOne1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildOne1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildOne1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
