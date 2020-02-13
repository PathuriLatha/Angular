import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setting-profile',
  templateUrl: './setting-profile.component.html',
  styleUrls: ['./setting-profile.component.css']
})
export class SettingProfileComponent implements OnInit {

  settingProfile = [
    { "id": 101, "name": "Change_Profile"},
    { "id": 102, "name": "Change_Username"},
    { "id": 103, "name": "Change_Password"},
    { "id": 104, "name": "Notification"},
    { "id": 105, "name": "More.."}
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onProfileSelect(profile){
    this.router.navigate(['/settings/setting-profile', profile.id]);
    // console.log("profileId :: "+profile.id);
  }

}
