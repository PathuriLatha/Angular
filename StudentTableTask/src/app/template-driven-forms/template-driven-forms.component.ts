import { Component, OnInit } from '@angular/core';
import { Details } from '../details';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.css']
})
export class TemplateDrivenFormsComponent implements OnInit {

  submitted: boolean = false;
  id: number;
  states = ['TS', 'AP', 'UP'];
  cities = ['Hyderabad', 'Karimnagar', 'Kurnool', 'Sircilla'];

  details = new Details(1, 'Latha', 'latha@gmail.com', this.states[0], this.cities[0]);

  constructor() { }

  ngOnInit() {
    this.id = 0;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.details.name);
    console.log(this.details.email);
    console.log(this.details.state);
    console.log(this.details.city);
  }

  addNew(){
    this.id = this.id +1;
    this.details = new Details(this.id, '', '', '', '');
  }

}
