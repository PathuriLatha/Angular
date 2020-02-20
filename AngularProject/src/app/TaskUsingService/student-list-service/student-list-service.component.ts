import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { StudentListService } from '.../student-list.service';
import { StudentListService } from '../../student-list.service';

@Component({
  selector: 'app-student-list-service',
  templateUrl: './student-list-service.component.html',
  styleUrls: ['./student-list-service.component.css']
})
export class StudentListServiceComponent implements OnInit {

  studentDetails = [];
  /* let letNumber: number = 20; */
  /* var varNumber = 20; */
  /* var varNumber: number = 20; */
  n: number = 20;
  /* const name: string = "string using with const";
  const check: string; */


  constructor(private router: Router, private studentService: StudentListService) { }

  ngOnInit() {
    this.studentDetails = this.studentService.getStudentsList();
    /* console.log(this.check); */
  }

  studentMarks(stuId: number){
   // this.router.navigate(['studentsView']);
    /* this.router.navigate(['studentsList/studentsView', stuId]); */
    console.log("studentView :: "+stuId);
    this.router.navigate(['studentsListService/studentMarks', stuId]);
  }

  studentEdit(studentId: number, studentName: string){
    /* this.studentEditing = student; */
    this.router.navigate(['studentsListService/edit', studentId]);
  }

}
