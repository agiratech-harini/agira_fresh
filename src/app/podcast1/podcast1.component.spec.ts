import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Podcast1Component } from './podcast1.component';

describe('Podcast1Component', () => {
  let component: Podcast1Component;
  let fixture: ComponentFixture<Podcast1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Podcast1Component]
    });
    fixture = TestBed.createComponent(Podcast1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
