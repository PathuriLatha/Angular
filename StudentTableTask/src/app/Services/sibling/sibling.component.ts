import { EmployeeService } from './../employee.service';
import { DetailsService } from './../details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.css'],
  providers: [DetailsService]
})
export class SiblingComponent implements OnInit {
  serviceDetails : any;
  empServiceMsg : string;
  detailsServiceMsg: string;
  detailsNumber: number;
  empNumber: number;

  constructor(private service: DetailsService, private empService: EmployeeService) { }

  ngOnInit() {
    this.serviceDetails = this.service.details;
    this.empServiceMsg = this.empService.service;
    this.detailsServiceMsg = this.service.message;
    this.detailsNumber = this.service.number;
    this.empNumber = this.empService.number;
  }
  
  /*   */

  // displayDetails(){
  //   console.log(this.service.details.length);
  //   for(let i=0; i<=this.service.details.length-1; i++){
  //     console.log(this.service.details[i]); 
  //   }
  // }

}
