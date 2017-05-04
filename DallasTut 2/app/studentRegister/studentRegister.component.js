"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const alert_service_1 = require("../services/alert.service");
const student_repository_service_1 = require("../users/api/student-repository.service");
// import { AlertService, UserService } from '../_services/index';
let StudentRegisterComponent = class StudentRegisterComponent {
    constructor(router, studentRepository, alertService) {
        this.router = router;
        this.studentRepository = studentRepository;
        this.alertService = alertService;
        this.student = {};
        this.loading = false;
    }
    register() {
        this.studentRepository.signUp(this.student);
        this.router.navigateByUrl('/student/newProfile');
    }
};
StudentRegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'register.component.html',
        styleUrls: ['register.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        student_repository_service_1.StudentRepository,
        alert_service_1.AlertService])
], StudentRegisterComponent);
exports.StudentRegisterComponent = StudentRegisterComponent;
//# sourceMappingURL=studentRegister.component.js.map