import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  accountArray = [
    {"name": "Latha", "status": "Active"},
    {"name": "Rama", "status": "InActive"},
    {"name": "Bhargavi", "status": "UnKown"}
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) { }

  newAccount(name: string, status: string){
    let newAcc = {
      "name": name, "status": status
    }
    this.accountArray.push(newAcc);
    this.loggingService.statusChangeService(status);
  }

  // account(){
  //   return this.accountArray;
  // }

  statusChange(id: number, status: string){
    this.accountArray[status].status = status;
    this.loggingService.statusChangeService(status);
  }

}
