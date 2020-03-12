import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable } from 'rxjs/Observable';
// import { IEmpolyee } from './employees';
import 'rxjs/add/operator/catch';
// import { catch } from 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  service: string;
  number: number = 1;
  private _url: string = "/assets/employees1.json";
  // private _url: string = "employees.json";
  
  /* getEmployees = [
    {"id": 101, "name": "Rama", "company": "Intellect PVT LTD"},
    {"id": 102, "name": "Latha", "company": "SemanticBits"},
    {"id": 103, "name": "Bhargavi", "company": "Zen3"},
    {"id": 104, "name": "Srivani", "company": "Sahasra pvt ltd"},
    {"id": 105, "name": "Shirisha", "company": "Infosys"}
  ]; */

  constructor(private http: HttpClient) {
    this.service = "service variable from EmployeeService";
    this.number = this.number + 1;
  }

  /* getEmployees(): Observable<IEmpolyee[]>{
    return this.http.get<IEmpolyee[]>(this._url)
                    .catch(this.errorHandler);
  } */

  getEmployees(): Observable<any>{
    return this.http.get(this._url).catch(this.errorHandler);
  }


  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "server Error");
    
  }
}
