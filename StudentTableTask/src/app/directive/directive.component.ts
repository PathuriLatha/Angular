import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  color: string;
  csIfShow: boolean = true;
  delayInSec: number = 6000;
  
  fruits = [
    'Banana', 'Orange', 'Apple', 'Grapes'
  ];

  constructor() { }

  ngOnInit() {
  }

}
