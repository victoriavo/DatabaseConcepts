import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { TutorEditorComponent } from "./users/tutors/tutor-editor/tutor-editor.component";
import { StudentEditorComponent } from "./users/students/student-editor/student-editor.component";
import { CoursesEditorComponent } from "./users/courses/courses-editor.component";
import { TutorProfileComponent } from "./users/tutors/tutor-profile/tutor-profile.component";
import { StudentProfileComponent } from "./users/students/student-profile/student-profile.component";
import { StudentRegisterComponent } from "./studentRegister/index";
import { TutorRegisterComponent } from "./tutorRegister/index";
import { FindTutorComponent } from "./users/tutors/findTutor/findTutor-component";
import { AuthGuard } from "./services/auth.guard";
import { NewTutorComponent } from "./users/tutors/tutor-editor/new-tutor.component";
import { NewStudentComponent } from "./users/students/student-editor/new-student.component";
import { Home2Component } from "./home/home2.component";
import { LoginTutComponent } from "./login/login.component";
import { LoginStuComponent } from "./login/loginstudent.component";

const appRoutes: Routes = [
    { path: '', component: LoginTutComponent},
    { path: 'tutor/home', component: HomeComponent},
    { path: 'student/home', component: Home2Component},
    { path: 'login', component: LoginTutComponent },
    { path: 'student/login', component: LoginStuComponent },
    { path: 'logout', component: LoginTutComponent },
    { path: 'tutor/signup', component: TutorRegisterComponent },
    { path: 'student/signup', component: StudentRegisterComponent },
    { path: 'findTutor', component: FindTutorComponent },
    { path: 'tutor/newProfile', component: NewTutorComponent },
    { path: 'student/newProfile', component: NewStudentComponent },
    { path: 'tutor/editProfile', component: TutorEditorComponent },
    { path: 'student/editProfile', component: StudentEditorComponent },
    { path: 'tutor/editCourse', component: TutorProfileComponent },
    { path: 'tutor/addCourses', component: CoursesEditorComponent },
    { path: 'tutor/viewProfile', component: TutorProfileComponent },
    { path: 'student/viewProfile', component: StudentProfileComponent },
    { path: 'tutor/sessions', component: LoginTutComponent },
    { path: 'student/sessions', component: LoginTutComponent },
    { path: 'aboutUs', component: LoginTutComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);