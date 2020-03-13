import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomObservableWithServiceComponent } from './custom-observable-with-service.component';

describe('CustomObservableWithServiceComponent', () => {
  let component: CustomObservableWithServiceComponent;
  let fixture: ComponentFixture<CustomObservableWithServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomObservableWithServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomObservableWithServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
