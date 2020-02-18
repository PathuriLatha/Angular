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
import { PipeComponent } from './pipe/pipe.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingProfileComponent } from './setting-profile/setting-profile.component';
import { SettingContactComponent } from './setting-contact/setting-contact.component';
import { SettingProfileDetailsComponent } from './setting-profile-details/setting-profile-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListServiceComponent } from './TaskUsingService/student-list-service/student-list-service.component';
import { StudentMarksComponent } from './TaskUsingService/student-marks/student-marks.component';
import { EditStudentComponent } from './TaskUsingService/edit-student/edit-student.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  /* { path: 'departments', component: DepartmentListComponent, outlet: 'default' }, */
  { path: 'departments', component: DepartmentListComponent },
  {
    path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [
      { path: 'dept-overview', component: DepartmentOverviewComponent },
      { path: 'dept-contact', component: DepartmentContactComponent }
    ]
  },
  /* { path: 'departments/:name', component: DepartmentDetailComponent }, */
  { path: 'employees', component: EmployeeListComponent },
  { path: 'college', component: CollegeComponent,
    children: [
      { path: 'students', component: StudentsComponent }
    ]
  },
  { path: 'pipes', component: PipeComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      { path: 'setting-profile', component: SettingProfileComponent },
      { path: 'setting-profile/:id', component: SettingProfileDetailsComponent },
      { path: 'setting-contact', component: SettingContactComponent }
    ]
  },
  {
    path: 'studentsList',
    component: StudentListComponent,
    children: [
      { path: 'studentView/:id', component: StudentViewComponent },
      { path: 'studentEdit/:id/:name', component: StudentEditComponent }
    ]
  },
  {
    path: 'studentsListService',
    component: StudentListServiceComponent,
    children: [
      { path: 'studentMarks/:id', component: StudentMarksComponent },
      { path: 'edit/:id', component: EditStudentComponent }
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
                                    StudentsComponent,
                                    PipeComponent,
                                    HomeComponent,
                                    SettingsComponent,
                                    SettingProfileComponent,
                                    SettingContactComponent,
                                    SettingProfileDetailsComponent,
                                    StudentListComponent,
                                    StudentViewComponent,
                                    StudentEditComponent,
                                    StudentListServiceComponent,
                                    StudentMarksComponent,
                                    EditStudentComponent,
                                 ];
