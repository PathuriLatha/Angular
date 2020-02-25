import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  formMail: string = '';
  formPassword: string = '';
  success: string = '';
  fail: string = '';

  /* mail = sessionStorage.getItem("mail");
  password = sessionStorage.getItem("password"); */
  mail = localStorage.getItem("mail");
  password = localStorage.getItem("password");

  result: string = '';

  constructor() { }

  ngOnInit() {
  }

  login(){

    /* console.log("form :: "+this.formMail+" "+this.formPassword);
    console.log("storage :: "+this.mail+" "+this.password); */

    if((this.formMail == this.mail) && (this.formPassword == this.password)){
      this.success = "Successfully Login";
      this.fail = '';
      /* sessionStorage.clear(); */
      localStorage.clear();
      localStorage.removeItem('mail');
      localStorage.removeItem('password');
      console.log(this.mail+" "+this.password);
    }
    else{
      this.fail = "Login Failed";
      this.success = '';
    }
  }

}
