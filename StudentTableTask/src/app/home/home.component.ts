import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  /* styleUrls: ['./home.component.css'] */
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  studentsList(){
    this.router.navigate(['studentDetails']);
  }
}
