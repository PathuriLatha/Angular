import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentEditComponent } from './student-edit/student-edit.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  /* {
    path: 'studentList',
    component:  StudentListComponent,
    children: [
      { path: 'edit/:id/:name', component: StudentEditComponent},
    ]
  }, */
  { path: 'studentList', component: StudentListComponent },
  { path: 'edit/:id/:name', component: StudentEditComponent },
  { path: "**", component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
                                    HomeComponent,
                                    PageNotFoundComponent,
                                    StudentListComponent,
                                    StudentEditComponent
                                 ]
