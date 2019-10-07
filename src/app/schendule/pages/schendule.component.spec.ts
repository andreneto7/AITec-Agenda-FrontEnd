import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchenduleComponent } from './schendule.component';

describe('SchenduleComponent', () => {
  let component: SchenduleComponent;
  let fixture: ComponentFixture<SchenduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchenduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchenduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
