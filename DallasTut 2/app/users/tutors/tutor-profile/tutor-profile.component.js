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
const tutor_repository_service_1 = require("../../api/tutor-repository.service");
const user_repository_1 = require("../../api/user-repository");
let TutorProfileComponent = class TutorProfileComponent {
    constructor(router, tutorRepository, route, userRepository) {
        this.router = router;
        this.tutorRepository = tutorRepository;
        this.route = route;
        this.userRepository = userRepository;
        // tutor : Tutor;
        this.tutor = {};
        this.courses = [];
        this.tutorRepository.viewProfile()
            .subscribe(tutor => this.tutor = tutor);
        this.getCourses();
    }
    getCourses() {
        this.tutorRepository.getCourses()
            .subscribe(courses => this.courses = courses);
        // this.router.navigateByUrl('/tutor/editCourse');
    }
    editCourses() {
        this.tutorRepository.editCourses(this.tutor);
    }
    logout() {
        this.userRepository.logout()
            .subscribe(x => console.log(x));
        this.router.navigateByUrl('/login');
    }
};
TutorProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tutor-profile',
        templateUrl: 'tutor-profile.component.html',
        styleUrls: ['tutor-profile.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        tutor_repository_service_1.TutorRepository,
        router_1.ActivatedRoute,
        user_repository_1.UserRepository])
], TutorProfileComponent);
exports.TutorProfileComponent = TutorProfileComponent;
//# sourceMappingURL=tutor-profile.component.js.map