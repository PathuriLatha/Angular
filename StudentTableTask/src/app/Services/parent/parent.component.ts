import { HEROES } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  message:string;
  heroes = HEROES;
  master = 'Master';
  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.message = $event
  }

}
