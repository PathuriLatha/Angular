import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
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

  sIdMarks: any;
  selectId: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }


  studentView(id: number){
    this.selectId = id;
    for(let i=0; i<this.studentsMarks.length; i++){
      if(this.studentsMarks[i].stuId == id){
        this.sIdMarks = this.studentsMarks[i];
      }
    }

  }


}
