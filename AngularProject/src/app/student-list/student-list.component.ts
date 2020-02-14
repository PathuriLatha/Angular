import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentsList = [
     {
        "id": 1001,
        "name": "Latha",
        "address": {
          "state": "TS",
          "city": "Sircilla",
          "zipCode": 505404
        }
     },
     {
       "id": 1002,
       "name": "Subhankari",
       "address": {
         "state": "AP",
         "city": "Kurnool",
         "zipCode": 500016
       }
     },
     {
       "id": 1003,
       "name": "Akhilesh",
       "address": {
         "state": "UP",
         "city": "varanasi",
         "zipCode": 255001
       }
     },
     {
       "id": 1004,
       "name": "Gufran",
       "address": {
         "state": "UP",
         "city": "Moradabad",
         "zipCode": 244001
       }
     }
  ];

  /* studentEditing = {}; */
  stuInput= { };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  studentView(stuId: number){
   // this.router.navigate(['studentsView']);
    /* this.router.navigate(['studentsList/studentsView', stuId]); */
    this.router.navigate(['studentsList/studentView', stuId]);
  }

  studentEdit(studentId: number, studentName: string){
    /* this.studentEditing = student; */
    this.router.navigate(['studentsList/studentEdit', studentId, studentName]);
  }

  studentInput(obj){
   // alert(this.stuInput);
    this.stuInput = obj;
  }

}
