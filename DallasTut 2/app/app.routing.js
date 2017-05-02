"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const index_1 = require("./home/index");
const index_2 = require("./login/index");
const tutor_editor_component_1 = require("./users/tutors/tutor-editor/tutor-editor.component");
const student_editor_component_1 = require("./users/students/student-editor/student-editor.component");
const courses_editor_component_1 = require("./users/courses/courses-editor.component");
const tutor_profile_component_1 = require("./users/tutors/tutor-profile/tutor-profile.component");
const student_profile_component_1 = require("./users/students/student-profile/student-profile.component");
const index_3 = require("./studentRegister/index");
const index_4 = require("./tutorRegister/index");
const findTutor_component_1 = require("./users/tutors/findTutor/findTutor-component");
const appRoutes = [
    { path: '', component: index_2.LoginComponent },
    { path: 'home', component: index_1.HomeComponent },
    { path: 'login', component: index_2.LoginComponent },
    { path: 'logout', component: index_2.LoginComponent },
    { path: 'tutorSignUp', component: index_4.TutorRegisterComponent },
    { path: 'studentSignUp', component: index_3.StudentRegisterComponent },
    { path: 'findTutor', component: findTutor_component_1.FindTutorComponent },
    { path: 'tutor/newProfile', component: tutor_editor_component_1.TutorEditorComponent },
    { path: 'student/newProfile', component: student_editor_component_1.StudentEditorComponent },
    { path: 'tutor/:id/updateProfile', component: tutor_editor_component_1.TutorEditorComponent },
    { path: 'student/:id/updateProfile', component: student_editor_component_1.StudentEditorComponent },
    { path: 'tutor/:id/courses', component: courses_editor_component_1.CoursesEditorComponent },
    { path: 'tutor/:id/addCourses', component: courses_editor_component_1.CoursesEditorComponent },
    { path: 'tutor/:id/viewProfile', component: tutor_profile_component_1.TutorProfileComponent },
    { path: 'student/:id/viewProfile', component: student_profile_component_1.StudentProfileComponent },
    { path: 'tutor/:id/sessions', component: index_2.LoginComponent },
    { path: 'student/:id/sessions', component: index_2.LoginComponent },
    { path: 'aboutUs', component: index_2.LoginComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map