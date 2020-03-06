import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  service: string;
  number: number = 1;
  
  getEmployees = [
    {"id": 101, "name": "Rama", "company": "Intellect PVT LTD"},
    {"id": 102, "name": "Latha", "company": "SemanticBits"},
    {"id": 103, "name": "Bhargavi", "company": "Zen3"},
    {"id": 104, "name": "Srivani", "company": "Sahasra pvt ltd"},
    {"id": 105, "name": "Shirisha", "company": "Infosys"}
  ];

  constructor() {
    this.service = "service variable from EmployeeService";
    this.number = this.number + 1;
  }

}
