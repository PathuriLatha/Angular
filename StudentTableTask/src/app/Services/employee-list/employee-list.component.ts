import { DetailsService } from './../details.service';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [DetailsService]
})
export class EmployeeListComponent implements OnInit {
  
  public employees = [];
  empServiceMessage: string ;
  detailsServiceMessage: string ;
  empNumber: number;
  detailsNumber: number;

  constructor(private employeeService: EmployeeService, private detailsService: DetailsService) { }

  // constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.detailsService.message = "This message changed from employeeList component";
    this.employees = this.employeeService.getEmployees;
    this.empServiceMessage = this.employeeService.service;
    this.detailsServiceMessage = this.detailsService.message; 
    this.empNumber = this.employeeService.number;
    this.detailsNumber = this.detailsService.number;
    console.log(this.employees);
  }

}
