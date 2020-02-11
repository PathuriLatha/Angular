import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundRoutingComponent } from './page-not-found-routing/page-not-found-routing.component';
import { CollegeComponent } from './college/college.component';
import { StudentsComponent } from './college/students/students.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';


const routes: Routes = [
  { path: '', component: DepartmentListComponent }, //default component
  { path: 'departments', component: DepartmentListComponent },
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [
      { path: 'overview', component: DepartmentOverviewComponent },
      { path: 'contact', component: DepartmentContactComponent }
    ]
  },
  /* { path: 'departments/:name', component: DepartmentDetailComponent }, */
  { path: 'employees', component: EmployeeListComponent },
  { path: 'college', component: CollegeComponent,
    children: [
      { path: 'students', component: StudentsComponent }
    ]
  },
  { path: "**", component: PageNotFoundRoutingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [  DepartmentListComponent,
                                    EmployeeListComponent,
                                    PageNotFoundRoutingComponent,
                                    DepartmentDetailComponent,
                                    DepartmentOverviewComponent,
                                    DepartmentContactComponent,
                                    CollegeComponent,
                                    StudentsComponent
                                 ];
