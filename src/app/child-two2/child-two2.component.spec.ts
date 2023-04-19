import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildTwo2Component } from './child-two2.component';

describe('ChildTwo2Component', () => {
  let component: ChildTwo2Component;
  let fixture: ComponentFixture<ChildTwo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildTwo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildTwo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
