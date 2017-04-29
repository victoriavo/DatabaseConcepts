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



const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LoginComponent },
    { path: 'tutorSignUp', component: TutorRegisterComponent },
    { path: 'studentSignUp', component: StudentRegisterComponent },
    { path: 'findTutor', component: HomeComponent },
    { path: 'tutor/newProfile', component: TutorEditorComponent },
    { path: 'student/newProfile', component: StudentEditorComponent },
    { path: 'tutor/:id/updateProfile', component: TutorEditorComponent },
    { path: 'student/:id/updateProfile', component: StudentEditorComponent },
    { path: 'tutor/:id/courses', component: CoursesEditorComponent },
    { path: 'tutor/:id/viewProfile', component: TutorProfileComponent },
    { path: 'student/:id/viewProfile', component: StudentProfileComponent },
    { path: 'tutor/:id/sessions', component: LoginComponent },
    { path: 'student/:id/sessions', component: LoginComponent },
    { path: 'aboutUs', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);