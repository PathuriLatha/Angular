import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CObservableComponent } from './c-observable.component';

describe('CObservableComponent', () => {
  let component: CObservableComponent;
  let fixture: ComponentFixture<CObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
