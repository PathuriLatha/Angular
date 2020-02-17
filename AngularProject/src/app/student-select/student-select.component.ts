import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-select',
  templateUrl: './student-select.component.html',
  styleUrls: ['./student-select.component.css']
})
export class StudentSelectComponent implements OnInit {
  /* @Input() studentSelectId ; */
  @Input() studentSelect;

  studentId: number;

  studentsMarks = [
    {
      "English": 70,
      "Maths": 92,
      "Science": 83,
      "Social": 88,
      "stuId": 1001
    },
    {
      "English": 92,
      "Maths": 89,
      "Science": 86,
      "Social": 92,
      "stuId": 1002
    },
    {
      "English": 84,
      "Maths": 96,
      "Science": 94,
      "Social": 74,
      "stuId": 1003
    },
    {
      "English": 75,
      "Maths": 94,
      "Science": 92,
      "Social": 78,
      "stuId": 1004
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
