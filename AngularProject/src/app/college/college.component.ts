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

  CollegeMessage = "Message from CollegeComponent via @Input";
  parentTextMessage: string = '';
  parentToChildTextMessage: string = '';
  childToParentViaOutput: string ;

  employees = ["Latha", "Subhankari", "Akhilesh", "Gufran" ];
  name: string;
  childCurrentVal: string;

  constructor() { }

  ngOnInit() {
  }

  parentToChild(value){
    this.parentToChild = value;
  }

  receiveMessage(event){
    this.childToParentViaOutput = event;
  }

  setName(emp: string){
    this.name = emp;
  }

  GetOutputVal(selected: string){
    if(selected){
      this.childCurrentVal = "value received from child :: "+selected;
    }
  }

}
