import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  /* styleUrls: ['./students.component.css'] */
  styles: [`
    .students{
      border: 2px solid blue;
      margin : 20px;
      padding : 20px;
    }
  `]
})
export class StudentsComponent implements OnInit {

  @Input() studentMessage: string;
  @Input() parentToChildTextMessage: string;

  childToParentViaOutput: string = "Message from student component via @Output";

  @Output() messageEvent = new EventEmitter<string>();
  @Output() outputToParent = new EventEmitter<string>();
  @Input() childName : string ;
  constructor() { }

  ngOnInit() {
  }

  sendMessage(){
    this.messageEvent.emit(this.childToParentViaOutput);
  }

  NotificationToParent(selected : string){
    this.outputToParent.emit(selected);
  }

}
