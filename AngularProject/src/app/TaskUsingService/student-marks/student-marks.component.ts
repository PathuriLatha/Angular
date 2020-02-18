import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../../student-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.css']
})
export class StudentMarksComponent implements OnInit {

  studentMarks = [];
  studentId: number;

  constructor(private studentService: StudentListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.studentMarks = this.studentService.getStudentsMarks();

    this.route.paramMap.subscribe((params: ParamMap) => {
      let stuId = parseInt(params.get('id'));
      this.studentId = stuId;
    });
  }

}
