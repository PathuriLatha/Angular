import { Subscription } from 'rxjs';
import { CustomObservableService } from './../custom-observable.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-custom-observable-with-service',
  templateUrl: './custom-observable-with-service.component.html',
  styleUrls: ['./custom-observable-with-service.component.css']
})
export class CustomObservableWithServiceComponent implements OnInit, OnDestroy {

  n: number = 12;
  subscription: Subscription;

  constructor(private service: CustomObservableService) { }

  ngOnInit() {
    this.subscription = this.service.myObservable.subscribe(
      (num) => {
        this.n = num;
        console.log("number :: "+num);
      },
      (error) => {
        console.log("Error :: "+error);
      },
      () => {
        console.log("complete");
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

/*  onIncreaseClick(){
    this.n++;
    this.service.next(this.n);
  }

  onErrorClick(){
    this.service.error();
  }

  onCompleteClick(){
    this.service.complete();
  } */

}
