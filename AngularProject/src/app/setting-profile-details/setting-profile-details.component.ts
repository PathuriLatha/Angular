import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-setting-profile-details',
  templateUrl: './setting-profile-details.component.html',
  styleUrls: ['./setting-profile-details.component.css']
})
export class SettingProfileDetailsComponent implements OnInit {

  public settingProfileId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.settingProfileId = id;
      // console.log("settingProfileId :: "+this.settingProfileId);
    });
  }

}
