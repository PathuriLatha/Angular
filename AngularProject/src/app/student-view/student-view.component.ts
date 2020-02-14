import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.studentId = id;
    });
  }

}

