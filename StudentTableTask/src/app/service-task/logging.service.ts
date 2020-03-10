import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  statusChangeService(status: string){
    console.log("new status: "+status);
  }

}
