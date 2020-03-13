import { Subscription, Observable, Observer } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-observable',
  templateUrl: './c-observable.component.html',
  styleUrls: ['./c-observable.component.css']
})
export class CObservableComponent implements OnInit {

  customSubscrition: Subscription;

  constructor() { }

  ngOnInit() {
    // Creating Observable.
    // Create method takes function as a argument with Observer.

    const myObservables = Observable.create((observer: Observer<string>) => {

      // Emit the first data package after 2 seconds.
      // next pushes the next data package.
      // Emitting string data types
      setTimeout(() => {
        observer.next('FIRST RESPONSE****:')
      }, 2000);

      // Emit the second data package after 4 seconds.
      // next pushes the next data package.
      // Emitting string data types

      setTimeout(() => {
        observer.next('SECOND RESPONSE****:')
      }, 4000);

      // Emit the error package after 5 seconds.
      // error emits the error response.
      // Emitting string data types

      setTimeout(() => {
        observer.error('ERROR RESPONSE****:')
      }, 5000)

      // Emits the complete.
      setTimeout(() => {
        observer.complete();
      }, 6000)

    });

 
    // Subsribe the observable
    // first callbacks take success.
    // second callbacks takes failure
    // third call backs takes completion.
    const customSubscrition = myObservables.subscribe((response: string) => {
      console.log("RESPONSE: ", response);
    },
      (error: string) => {
        console.log("FAILURE RESPONSE: ", error);
      },
      () => {
        // This will not be called since there is an error at 5 seconds before the completion.
        console.log("COMPLETION:");
      }
    );
  }

  ngOnDestroy(){
    // unsubscribes the subscription.
    this.customSubscrition.unsubscribe();
  }

}
