import { LoggingService } from './../logging.service';
import { AccountService } from './../account.service';
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

  constructor(private accountService: AccountService, private loggingService: LoggingService) {
    this.accountService.statusUpdated.subscribe((status: string) => {
      alert("new status :: "+status);
    });
  }

  ngOnInit() {
  }

  addAccount(){
    this.accountService.newAccount(this.userName, this.status);
    console.log(this.userName+" "+this.status);
  }

}
