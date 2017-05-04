import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
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

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'tutor/signup', component: TutorRegisterComponent },
    { path: 'student/signup', component: StudentRegisterComponent },
    { path: 'findTutor', component: FindTutorComponent },
    { path: 'tutor/newProfile', component: NewTutorComponent },
    { path: 'student/newProfile', component: StudentEditorComponent },
    { path: 'tutor/editProfile', component: TutorEditorComponent },
    { path: 'student/:id/updateProfile', component: StudentEditorComponent },
    { path: 'tutor/:id/courses', component: CoursesEditorComponent },
    { path: 'tutor/:id/addCourses', component: CoursesEditorComponent },
    { path: 'tutor/viewProfile', component: TutorProfileComponent },
    { path: 'student/:id/viewProfile', component: StudentProfileComponent },
    { path: 'tutor/:id/sessions', component: LoginComponent },
    { path: 'student/:id/sessions', component: LoginComponent },
    { path: 'aboutUs', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);