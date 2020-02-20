import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {
  @Input() marksArray;
  /* @Input() studentId: number; */
  /* studentId: number; */

  constructor() { }

  ngOnInit() {
  }

}
