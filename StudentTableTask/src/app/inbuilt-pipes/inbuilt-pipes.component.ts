import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuilt-pipes',
  templateUrl: './inbuilt-pipes.component.html',
  styleUrls: ['./inbuilt-pipes.component.css']
})
export class InbuiltPipesComponent implements OnInit {

  title = 'Inbuilt pipes';
  sum: number = 0;

  userName: string = "";
  password: string = "";
  loginMessage: string = "";
  popcornMsg: string = "";

  city: string = "Hyderabad";
  salary: number = 752487500;
  no: number = 0.72;
  titleCase: string = "This is a title case example";
  person: object = { firstName: "Latha", lastName: "Pathuri" };
  dt: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
