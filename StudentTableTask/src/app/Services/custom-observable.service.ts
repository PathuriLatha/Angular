import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomObservableService {
  
  myObservable: Observable<number>
  myObserver: Observer<number>

  constructor() {
    this.myObservable = Observable.create((observer: Observer<number>)=>{
      this.myObserver = observer;
    });
  }

  next(data){
    this.myObserver.next(data);
  }

  error(errorMsg){
    this.myObserver.error("Error is commping from service :: "+errorMsg);
  }
  
  complete(){
    this.myObserver.complete();
  }

}
