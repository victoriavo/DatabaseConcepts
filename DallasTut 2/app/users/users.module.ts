import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TutorEditorComponent } from "./tutors/tutor-editor/tutor-editor.component";
import { StudentEditorComponent } from "./students/student-editor/student-editor.component";
import { UserRepository } from "./api/user-repository";
import { CoursesEditorComponent } from "./courses/courses-editor.component";
import { TutorProfileComponent } from "./tutors/tutor-profile/tutor-profile.component";
import { StudentProfileComponent } from "./students/student-profile/student-profile.component";
import { RouterModule } from "@angular/router";



@NgModule({
  imports:      [ 
    FormsModule,
    BrowserModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    TutorEditorComponent,
    StudentEditorComponent,
    CoursesEditorComponent,
    TutorProfileComponent,
    StudentProfileComponent,
  ],
  exports: [
     TutorEditorComponent,
     StudentEditorComponent,
     CoursesEditorComponent,
     TutorProfileComponent,
     StudentProfileComponent
  ],
  providers: [
      UserRepository,
  ]
})

export class UsersModule { }