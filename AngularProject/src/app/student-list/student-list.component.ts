import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviourSubjectService } from '../behaviour-subject.service';

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
  stuInput = { };
  message: string;
  /* stuSelectId : number; */
  stuSelect = { };

  constructor(private router: Router, private behaviour: BehaviourSubjectService) { }

  ngOnInit() {
    this.behaviour.currentMessage.subscribe(msg => {
      this.message = msg;
    })
  }

  studentView(stuId: number){
   // this.router.navigate(['studentsView']);
    /* this.router.navigate(['studentsList/studentsView', stuId]); */
    console.log("studentView :: "+stuId);
    this.router.navigate(['studentsList/studentView', stuId]);
  }

  studentEdit(studentId: number, studentName: string){
    /* this.studentEditing = student; */
    this.router.navigate(['studentsList/studentEdit', studentId, studentName]);
  }

  studentUpdate(obj){
   // alert(this.stuInput);
   /*  alert("from update :: "+obj);
    console.log(obj); */
    this.stuInput = obj;
  }

/*   selectStudent(id: number){
     *//* alert("from select :: "+obj);
    console.log(obj); *//*
    this.stuSelectId = id;
  } */
  selectStudent(obj){
    // alert("from selectStudent :: "+obj);
    this.stuSelect = obj;
  }

}
