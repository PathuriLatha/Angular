import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  statusArray = ['Active', 'InActive', 'Unkown'];
  userName: string = '';
  status: string = '';

  constructor() { }

  ngOnInit() {
  }

  addAccount(){
    console.log(this.userName+" "+this.status);
  }

}
