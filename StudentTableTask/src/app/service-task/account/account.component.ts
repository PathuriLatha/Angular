import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountDetails = [];

  constructor(private accountService: AccountService) {
    this.accountDetails = this.accountService.accountArray;
  }

  ngOnInit() {
  }
  
  setStatus(status: string){
    this.accountService.statusUpdated.emit(status);
    console.log(status);
  }

}
