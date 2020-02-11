import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found-routing',
  /* templateUrl: './page-not-found-routing.component.html', */
  template: `
    <div class="PageNotFound">
      <h4>Page not found component</h4>
    </div>
  `,
  styleUrls: ['./page-not-found-routing.component.css']
})
export class PageNotFoundRoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
