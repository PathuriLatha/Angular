import { ServiceTaskComponent } from './service-task/service-task.component';
import { SiblingComponent } from './Services/sibling/sibling.component';
import { EmployeeListComponent } from './Services/employee-list/employee-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { RegisterComponent } from './register/register.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { FieldsetsComponent } from './fieldsets/fieldsets.component';
import { DirectiveComponent } from './directive/directive.component';
import { LoginComponent } from './Services/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  /* { path: 'list', component: StudentListComponent }, */
  { path: 'studentDetails', component:  StudentDetailsComponent},
  { path: 'edit/:id/:name', component: StudentEditComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'loginForm', component: LoginFormComponent },
  { path: 'templateDrivenForm', component: TemplateDrivenFormsComponent },
  { path: 'fieldsets', component: FieldsetsComponent },
  { path: 'directives', component: DirectiveComponent },
  /*{ 
    path: 'services', 
    component: LoginComponent,
    children: [
      {path: 'studentList', component: SiblingComponent}
    ]
  },*/
  { path: 'services', component: LoginComponent },
  { path: 'employeeList', component: EmployeeListComponent },
  { path: 'studentList', component: SiblingComponent },
  { path: 'serviceTask', component: ServiceTaskComponent },
/*   { path: 'newTab', component: StudentDetailsComponent }, */
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
                                    HomeComponent,
                                    PageNotFoundComponent,
                                    StudentDetailsComponent,
                                    StudentEditComponent,
                                    RegisterComponent,
                                    LoginFormComponent,
                                    TemplateDrivenFormsComponent,
                                    FieldsetsComponent,
                                    DirectiveComponent,
                                    LoginComponent,
                                    EmployeeListComponent,
                                    SiblingComponent,
                                    ServiceTaskComponent
                                 ];

