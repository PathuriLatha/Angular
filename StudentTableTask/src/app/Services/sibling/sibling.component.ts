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

  constructor(private service: DetailsService) { }

  ngOnInit() {
    this.serviceDetails = this.service.details;
  }
  
  /*   */

  displayDetails(){
    console.log(this.service.details.length);
    for(let i=0; i<=this.service.details.length-1; i++){
      console.log(this.service.details[i]); 
    }
  }
}
