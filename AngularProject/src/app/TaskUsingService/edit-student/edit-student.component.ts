import { Component, OnInit } from '@angular/core';
import { StudentListService } from '../../student-list.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  editStudentDetails = [];
  studentId: number;

  constructor(private studentService: StudentListService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.editStudentDetails = this.studentService.getStudentsList();

    this.route.paramMap.subscribe((params: ParamMap) => {
      let stuId = parseInt(params.get('id'));
      this.studentId = stuId;
    });
  }

}
