import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  /* styleUrls: ['./employee-list.component.css'], */
  styles: [`
    table, th, td{
      border: 2px solid black;
    }
  `]
})
export class EmployeeListComponent implements OnInit {

  employees = [
    { "id": 1001, "name": "Latha"},
    { "id": 1002, "name": "Subhankari"},
    { "id": 1003, "name": "Akhilesh"},
    { "id": 1004, "name": "Gufran"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
