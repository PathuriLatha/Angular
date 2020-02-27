import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { PasswordValidator } from '../password.validator';
import { Router } from '@angular/router';
import { AbstractControl } from '@angular/forms';
/* import { PasswordValidator } from '../password-validator.directive'; */

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /* msg: string = ""; */
  studentDetails = [];
  submitted = false;
  /* registrationForm: FormGroup; */
  /* registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
    dob: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"), Validators.email]),
    pwd: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    cPwd: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    marks: new FormGroup({
      english: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(36), Validators.max(100)]),
      maths: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(36), Validators.max(100)]),
      science: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(36), Validators.max(100)]),
      social: new FormControl("", [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(36), Validators.max(100)])
    })
  }, {validators: PasswordValidator}); */

  constructor(private router: Router, private formBuilder: FormBuilder) { }

  registrationForm: FormGroup = this.formBuilder.group({
    firstName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")] ],
    lastName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")] ],
    dob: ["", [Validators.required] ],
    gender: ["", [Validators.required] ],
    email: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"), Validators.email] ],
    /* pwdGroup: this.formBuilder.group({
      pwd: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}")] ],
      cPwd: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20)] ],
    }, { validator: this.passwordMismatch}), */
    pwd: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}")] ],
    cPwd: ["", Validators.required ],
    marks: this.formBuilder.group({
      english: ["", [Validators.required, Validators.pattern("^[0-9]*$")] ],
      maths: ["", [Validators.required, Validators.pattern("^[0-9]*$")] ],
      science: ["", [Validators.required, Validators.pattern("^[0-9]*$")] ],
      social: ["", [Validators.required, Validators.pattern("^[0-9]*$")] ]
    })
  }, {validator: PasswordValidator});

  ngOnInit() { }

  get firstName(){
    //alert(this.registrationForm.get('firstName'));
    return this.registrationForm.get('firstName');
  }
  get lastName(){
    return this.registrationForm.get('lastName');
  }
  get dob(){
    return this.registrationForm.get('dob');
  }
  get gender(){
    return this.registrationForm.get('gender');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  /* get pwd(){
    return this.registrationForm.get('pwdGroup').get('pwd');
  }
  get cPwd(){
    return this.registrationForm.get('pwdGroup').get('cPwd');
  } */
  get pwd(){
    return this.registrationForm.get('pwd');
  }
  get cPwd(){
    return this.registrationForm.get('cPwd');
  }
  get english(){
    return this.registrationForm.get('marks').get('english');
  }
  get maths(){
    return this.registrationForm.get('marks').get('maths');
  }
  get science(){
    return this.registrationForm.get('marks').get('science');
  }
  get social(){
    return this.registrationForm.get('marks').get('social');
  }

  onRegisterClick(){
    let firstName = this.registrationForm.controls['firstName'].value;
    let lastName = this.registrationForm.get('lastName').value;
    let dob = this.registrationForm.get('dob').value;
    let gender = this.registrationForm.get('gender').value;
    let email = this.registrationForm.get('email').value;
    /* let pwd = this.registrationForm.get('pwdGroup').get('pwd').value;
    let cPwd = this.registrationForm.get('pwdGroup').get('cPwd').value; */
    let pwd = this.registrationForm.get('pwd').value;
    let cPwd = this.registrationForm.get('cPwd').value;
    let english = this.registrationForm.get(['marks', 'english']).value;
    let maths = this.registrationForm.get('marks').get('maths').value;
    let science = this.registrationForm.get('marks').get('science').value;
    let social = this.registrationForm.get('marks').get('social').value;

    localStorage.setItem("mail", email);
    localStorage.setItem("password", pwd);
    /* sessionStorage.setItem("mail", email);
    sessionStorage.setItem("password", pwd); */

    console.log(` FirstName = ${firstName}\n LastName = ${lastName}\n Date Of Birth = ${dob}\n Gender = ${gender}\n Email = ${email}\n Password = ${pwd}\n Confirm Password = ${cPwd}\n Marks :: \n English = ${english}\n Maths = ${maths}\n Science = ${science}\n Social = ${social} `);
    /* this.router.navigate(['home']); */

    if(this.registrationForm.valid){
      this.submitted = true;
      console.log(` FirstName = ${firstName}\n LastName = ${lastName}\n Date Of Birth = ${dob}\n Gender = ${gender}\n Email = ${email}\n Password = ${pwd}\n Confirm Password = ${cPwd}\n Marks :: \n English = ${english}\n Maths = ${maths}\n Science = ${science}\n Social = ${social} `);
      this.studentDetails.push(firstName);
      this.studentDetails.push(lastName);
      this.studentDetails.push(dob);
      this.studentDetails.push(gender);
      this.studentDetails.push(email);
      this.studentDetails.push(pwd);
      this.studentDetails.push(cPwd);
      this.studentDetails.push(english);
      this.studentDetails.push(maths);
      this.studentDetails.push(science);
      this.studentDetails.push(social);

      /* this.studentDetails.forEach(function(value){
        console.log(value);
      }); */

      this.router.navigate(['home']);
      console.log("submitted :: "+this.submitted);

    }
    else{
      this.submitted = false;
      console.log("Error");
      console.log(this.registrationForm.valid);
      console.log(this.registrationForm.invalid);
      console.log("submitted :: "+this.submitted);
    }

    /*  if(this.registrationForm.invalid){
      return;
    }
    else{
      console.log(` FirstName = ${firstName}\n LastName = ${lastName}\n Date Of Birth = ${dob}\n Gender = ${gender}\n Email = ${email}\n Password = ${pwd}\n Confirm Password = ${cPwd}\n Marks :: \n English = ${english}\n Maths = ${maths}\n Science = ${science}\n Social = ${social} `);
      this.submitted = true;
      this.router.navigate(['home']);
    } */

  }

  /* passwordMismatch(group: AbstractControl): {[key: string]: any} | null {
    const password = group.get('pwd');
    const confirmPassword = group.get('cPwd');

    if(password.value === confirmPassword.value || confirmPassword.pristine){
      return null;
    }
    else{
      return {'misMatch': true};
    }
  } */

}
