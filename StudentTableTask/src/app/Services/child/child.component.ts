import { Hero } from './../hero';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message: string = "form child component";
  obj = [];

  @Output() messageEvent = new EventEmitter<string>();
  @Input() hero: Hero;
  @Input('master') masterName: string;
  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    // this.obj.push()
    this.messageEvent.emit(this.message);
    console.log("sendMessage from child component event");
  }

}
