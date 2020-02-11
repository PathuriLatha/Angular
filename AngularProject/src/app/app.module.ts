import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { StudentsComponent } from './college/students/students.component';
import { PipeComponent } from './pipe/pipe.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

/*
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundRoutingComponent } from './page-not-found-routing/page-not-found-routing.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';

 */

@NgModule({
  declarations: [
    AppComponent,
    /* DepartmentListComponent,
    EmployeeListComponent,
    PageNotFoundRoutingComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent */
    routingComponents,
    CollegeComponent,
    StudentsComponent,
    PipeComponent,
    DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


