import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  /* styleUrls: ['./college.component.css'] */
  styles: [`
    .college{
      border: 2px solid red;
      margin : 20px;
      padding : 20px;
    }
  `]
})
export class CollegeComponent implements OnInit {

  CollegeMessage = "Message from CollegeComponent";
  parentTextMessage: string = '';
  parentToChildTextMessage: string = '';

  constructor() { }

  ngOnInit() {
  }

  parentToChild(value){
    this.parentToChild = value;
  }

}
