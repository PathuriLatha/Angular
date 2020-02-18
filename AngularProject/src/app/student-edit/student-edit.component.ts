import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  /* selector: 'app-student-edit', */
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  /* @Input() studentEdit : object ; */
  studentId: number;
  studentName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let stuId = parseInt(params.get('id'));
      this.studentId = stuId;
      let stuName = params.get('name');
      this.studentName = stuName;
    });
  }

}
