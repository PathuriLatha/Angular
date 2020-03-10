import { AccountService } from './../account.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  accountDetails = [];
  @Input() accounts: {name: string, status: string};
  @Input() id: number;
  
  constructor(private accountService: AccountService) {
    this.accountDetails = this.accountService.accountArray;
  }

  ngOnInit() {
  }
  
  setStatus(status: string){
    console.log(status);
    this.accountService.statusChange(this.id, status);
    this.accountService.statusUpdated.emit(status);

  }

}
