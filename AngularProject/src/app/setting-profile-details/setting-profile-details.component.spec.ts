import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingProfileDetailsComponent } from './setting-profile-details.component';

describe('SettingProfileDetailsComponent', () => {
  let component: SettingProfileDetailsComponent;
  let fixture: ComponentFixture<SettingProfileDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingProfileDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
