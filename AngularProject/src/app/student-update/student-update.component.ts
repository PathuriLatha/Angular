import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {

  @Input() studentUpdate ;

  constructor() { }

  ngOnInit() {
  }

}
