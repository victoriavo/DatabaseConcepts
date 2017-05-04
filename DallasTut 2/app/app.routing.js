"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("@angular/router");
const index_1 = require("./home/index");
const tutor_editor_component_1 = require("./users/tutors/tutor-editor/tutor-editor.component");
const student_editor_component_1 = require("./users/students/student-editor/student-editor.component");
const courses_editor_component_1 = require("./users/courses/courses-editor.component");
const tutor_profile_component_1 = require("./users/tutors/tutor-profile/tutor-profile.component");
const student_profile_component_1 = require("./users/students/student-profile/student-profile.component");
const index_2 = require("./studentRegister/index");
const index_3 = require("./tutorRegister/index");
const findTutor_component_1 = require("./users/tutors/findTutor/findTutor-component");
const new_tutor_component_1 = require("./users/tutors/tutor-editor/new-tutor.component");
const new_student_component_1 = require("./users/students/student-editor/new-student.component");
const home2_component_1 = require("./home/home2.component");
const login_component_1 = require("./login/login.component");
const loginstudent_component_1 = require("./login/loginstudent.component");
const appRoutes = [
    { path: '', component: login_component_1.LoginTutComponent },
    { path: 'tutor/home', component: index_1.HomeComponent },
    { path: 'student/home', component: home2_component_1.Home2Component },
    { path: 'login', component: login_component_1.LoginTutComponent },
    { path: 'student/login', component: loginstudent_component_1.LoginStuComponent },
    { path: 'logout', component: login_component_1.LoginTutComponent },
    { path: 'tutor/signup', component: index_3.TutorRegisterComponent },
    { path: 'student/signup', component: index_2.StudentRegisterComponent },
    { path: 'findTutor', component: findTutor_component_1.FindTutorComponent },
    { path: 'tutor/newProfile', component: new_tutor_component_1.NewTutorComponent },
    { path: 'student/newProfile', component: new_student_component_1.NewStudentComponent },
    { path: 'tutor/editProfile', component: tutor_editor_component_1.TutorEditorComponent },
    { path: 'student/editProfile', component: student_editor_component_1.StudentEditorComponent },
    { path: 'tutor/editCourse', component: tutor_profile_component_1.TutorProfileComponent },
    { path: 'tutor/addCourses', component: courses_editor_component_1.CoursesEditorComponent },
    { path: 'tutor/viewProfile', component: tutor_profile_component_1.TutorProfileComponent },
    { path: 'student/viewProfile', component: student_profile_component_1.StudentProfileComponent },
    { path: 'tutor/sessions', component: login_component_1.LoginTutComponent },
    { path: 'student/sessions', component: login_component_1.LoginTutComponent },
    { path: 'aboutUs', component: login_component_1.LoginTutComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map