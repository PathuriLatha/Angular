import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Subscription, Observable, Observer } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  myObservable: Observable<any>;
  
  constructor() { }

  ngOnInit() {
    this.myObservable = Observable.create((observer: Observer<string>)=>{
      setTimeout(() => { observer.next("first data package"); }, 2000);
      setTimeout(() => { observer.next("second data package"); }, 5000);
      setTimeout(() => { observer.next("third data package"); }, 8000);
      setTimeout(() => { observer.complete(); }, 10000);
      setTimeout(() => { observer.error("error message"); }, 10000);
      setTimeout(() => { observer.next("fourth data package"); }, 12000);
    });

    this.subscription = this.myObservable.subscribe(
      (data) => {
        console.log("responce :: "+data);
      },
      (error) => {
        console.log("error :: " +error);
      },
      () => {
        console.log("Complete");
      }
    );
  }

  ngOnDestroy(){
    console.log("Destroy");
    this.subscription.unsubscribe();
  }

}
