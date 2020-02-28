import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fieldsets',
  templateUrl: './fieldsets.component.html',
  styleUrls: ['./fieldsets.component.css']
})
export class FieldsetsComponent implements OnInit {
  firstname: string = null;
  lastname: string = null;
  email: string = null;
  amount: string = null;
  gender: string = null;
  country: string = "";
  success: string = null;
  fail: string = null;

  constructor() { }

  ngOnInit() {
  }

  onRegisterClick(f){
    if (f.valid){
      this.success = "Firstname: " + this.firstname + "<br>Lastname: " + this.lastname + "<br>Email: " + this.email +
      "<br>Amount: " + this.amount + "<br>Gender: " + this.gender + "<br>Country: " + this.country;
      this.fail = "";
    }
    else{
      this.fail = "Invalid";
      this.success = "";
    }
  }
}
