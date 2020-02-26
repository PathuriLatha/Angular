import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  /* formMail: string = '';
  formPassword: string = ''; */
  success: string = '';
  fail: string = '';

  /* mail = sessionStorage.getItem("mail");
  password = sessionStorage.getItem("password"); */
  mail = localStorage.getItem("mail");
  password = localStorage.getItem("password");

  result: string = '';
  loginSuccess: boolean = false;

  constructor(private router: Router, private fb: FormBuilder) { }

  loginForm = this.fb.group({
    userName: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"), Validators.email] ],
    pwd: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}")] ]
  });

  ngOnInit() {
  }

  get userName(){
    return this.loginForm.get('userName');
  }
  get pwd(){
    return this.loginForm.get('pwd');
  }

  login(){
    /* console.log("form :: "+this.formMail+" "+this.formPassword);
    console.log("storage :: "+this.mail+" "+this.password); */

    /* if((this.formMail == this.mail) && (this.formPassword == this.password)){
      this.success = "Successfully Login";
      this.loginSuccess = true;
      this.fail = '';
       *//* sessionStorage.clear(); *//*
       *//* localStorage.clear(); *//*
      localStorage.removeItem('mail');
      localStorage.removeItem('password');
      console.log(this.mail+" "+this.password);

    } */
    if((this.userName.value == this.mail) && (this.pwd.value == this.password)){
      this.success = "Successfully Login";
      this.loginSuccess = true;
      this.fail = '';
      /* sessionStorage.clear(); */
      /* localStorage.clear(); */
      localStorage.removeItem('mail');
      localStorage.removeItem('password');
      console.log(this.mail+" "+this.password);
      console.log(this.userName.value+" "+this.pwd.value);

      this.router.navigate(['home']);

    }
    else{
      this.fail = "Invalid credentials";
      this.success = '';
      console.log(this.userName.value+" "+this.pwd.value);
    }
  }

}
