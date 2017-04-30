"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const tutor_editor_component_1 = require("./tutors/tutor-editor/tutor-editor.component");
const student_editor_component_1 = require("./students/student-editor/student-editor.component");
const user_repository_1 = require("./api/user-repository");
const courses_editor_component_1 = require("./courses/courses-editor.component");
const tutor_profile_component_1 = require("./tutors/tutor-profile/tutor-profile.component");
const student_profile_component_1 = require("./students/student-profile/student-profile.component");
const router_1 = require("@angular/router");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.FormsModule,
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            router_1.RouterModule
        ],
        declarations: [
            tutor_editor_component_1.TutorEditorComponent,
            student_editor_component_1.StudentEditorComponent,
            courses_editor_component_1.CoursesEditorComponent,
            tutor_profile_component_1.TutorProfileComponent,
            student_profile_component_1.StudentProfileComponent,
        ],
        exports: [
            tutor_editor_component_1.TutorEditorComponent,
            student_editor_component_1.StudentEditorComponent,
            courses_editor_component_1.CoursesEditorComponent,
            tutor_profile_component_1.TutorProfileComponent,
            student_profile_component_1.StudentProfileComponent,
        ],
        providers: [
            user_repository_1.UserRepository,
        ]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map