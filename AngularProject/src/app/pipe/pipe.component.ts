import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  /* styleUrls: ['./pipe.component.css'] */
  styles: [`
    .pipes{
      border: 2px dotted pink;
      margin: 20px;
      padding: 20px;
    }
  `]
})
export class PipeComponent implements OnInit {

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
