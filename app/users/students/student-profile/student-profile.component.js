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
const user_repository_1 = require("../../api/user-repository");
let StudentProfileComponent = class StudentProfileComponent {
    constructor(route, router, userRepository) {
        this.route = route;
        this.router = router;
        this.userRepository = userRepository;
        this.student = {
            id: 1,
            first_name: "Trevor",
            last_name: "Parker",
            bio: "My name is Trevor, I'm in 10th grade and I need help in Calculus AB and AP English.  I learn best by working out problems step by step.",
            classes: ["Calculus AB", "AP English Literature"],
            photo: "/app/images/student.jpeg",
            high_school: "Highland Park High School",
        };
    }
};
StudentProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'student-profile',
        templateUrl: 'student-profile.component.html',
        styleUrls: ['student-profile.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_repository_1.UserRepository])
], StudentProfileComponent);
exports.StudentProfileComponent = StudentProfileComponent;
//# sourceMappingURL=student-profile.component.js.map