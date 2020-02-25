import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /* msg: string = ""; */
  studentDetails = [];
  registrationForm: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
    lastName: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]),
    dob: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"), Validators.email]),
    pwd: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    cPwd: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    marks: new FormGroup({
      english: new FormControl("", [Validators.required]),
      maths: new FormControl("", [Validators.required]),
      science: new FormControl("", [Validators.required]),
      social: new FormControl("", [Validators.required])
    })
  });
  /* registrationForm = this.fb.group({
    firstName: ['', Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")],
    lastName: ['', Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("^[a-zA-Z ]*$")]
  }); */

  constructor() { }

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

    if(this.registrationForm.valid){
      console.log(` FirstName = ${firstName}\n LastName = ${lastName}\n Date Of Birth = ${dob}\n Gender = ${gender}\n Email = ${email}\n Password = ${pwd}\n Confirm Password = ${cPwd}\n Marks :: \n English = ${english}\n Maths = ${maths}\n Science = ${science}\n Social = ${social} `);
      /* this.msg += "FirstName :: "+firstName+"<br>";
      this.msg += "LastName :: "+lastName+"<br>";
      this.msg += "Date of birth :: "+dob+"<br>";
      this.msg += "Gender :: "+gender+"<br>";
      this.msg += "Email Id :: "+email+"<br>";
      this.msg += "Password :: "+pwd+"<br>";
      this.msg += "Confirm Password :: "+cPwd+"<br>";
      this.msg += "Marks <br>";
      this.msg += "English :: "+english+"<br>";
      this.msg += "Maths :: "+maths+"<br>";
      this.msg += "Science :: "+science+"<br>";
      this.msg += "Social :: "+social+"<br>"; */
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


    }
    else{
      console.log("Error");
    }
  }

}
