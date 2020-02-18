import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { StudentsComponent } from './students/students.component';

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
/* export class CollegeComponent implements OnInit { */
export class CollegeComponent implements AfterViewInit {

  CollegeMessage = "Message from CollegeComponent via @Input";
  parentTextMessage: string = '';
  parentToChildTextMessage: string = '';
  childToParentViaOutput: string ;

  employees = ["Latha", "Subhankari", "Akhilesh", "Gufran" ];
  name: string;
  childCurrentVal: string;

  @ViewChild(StudentsComponent, {static: true}) child;

  viewChildMsgParent: string;

  constructor() { }

  /* ngOnInit() {
  } */

  ngAfterViewInit(){
    this.viewChildMsgParent = this.child.viewChildMsgChild;
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
