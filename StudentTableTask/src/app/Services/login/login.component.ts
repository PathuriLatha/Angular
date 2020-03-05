import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name: string = '';
  qualification: string = '';

  constructor() { 

  }

  ngOnInit() {
  }
  
  add(){
    console.log("add function");
    console.log("Name :: "+this.name);
    console.log("Qualification :: "+this.qualification);
  }

}
