import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBook1Component } from './e-book1.component';

describe('EBook1Component', () => {
  let component: EBook1Component;
  let fixture: ComponentFixture<EBook1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EBook1Component]
    });
    fixture = TestBed.createComponent(EBook1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
