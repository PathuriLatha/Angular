import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
