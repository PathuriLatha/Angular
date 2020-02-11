import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundRoutingComponent } from './page-not-found-routing.component';

describe('PageNotFoundRoutingComponent', () => {
  let component: PageNotFoundRoutingComponent;
  let fixture: ComponentFixture<PageNotFoundRoutingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundRoutingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
