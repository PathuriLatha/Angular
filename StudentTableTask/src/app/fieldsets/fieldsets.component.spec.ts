import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldsetsComponent } from './fieldsets.component';

describe('FieldsetsComponent', () => {
  let component: FieldsetsComponent;
  let fixture: ComponentFixture<FieldsetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldsetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldsetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
