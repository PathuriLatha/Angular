import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { StudentSelectComponent } from './student-select/student-select.component';
import { StudentListService } from './student-list.service';

/*
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundRoutingComponent } from './page-not-found-routing/page-not-found-routing.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { CollegeComponent } from './college/college.component';
import { StudentsComponent } from './college/students/students.component';
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

 */

@NgModule({
  declarations: [
    AppComponent,
    /* DepartmentListComponent,
    EmployeeListComponent,
    PageNotFoundRoutingComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent
    CollegeComponent,
    StudentsComponent,
    PipeComponent,
    HomeComponent
    SettingsComponent,
    SettingProfileComponent,
    SettingContactComponent,
    SettingProfileDetailsComponent
    StudentListComponent,
    StudentViewComponent,
    StudentEditComponent,
    StudentListServiceComponent,
    StudentMarksComponent,
    EditStudentComponent,*/
    routingComponents,
    DepartmentDetailComponent,
    StudentUpdateComponent,
    StudentSelectComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StudentListService],
  bootstrap: [AppComponent]
})
export class AppModule { }


