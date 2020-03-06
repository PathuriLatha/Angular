import { StructuralDelayDirective } from './structuralDelay.directive';
import { StructuralLoopDirective } from './structuralLoop.directive';
import { StructuralIfDirective } from './structuralIf.directive';
import { AppNotDirective } from './app-not.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentViewComponent } from './student-details/student-view/student-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { ParentComponent } from './Services/parent/parent.component';
import { ChildComponent } from './Services/child/child.component';
import { NewAccountComponent } from './service-task/new-account/new-account.component';
import { AccountComponent } from './service-task/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    StudentViewComponent,
    HighlightDirective,
    AppNotDirective,
    StructuralIfDirective,
    StructuralLoopDirective,
    StructuralDelayDirective,
    ParentComponent,
    ChildComponent,
    NewAccountComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
