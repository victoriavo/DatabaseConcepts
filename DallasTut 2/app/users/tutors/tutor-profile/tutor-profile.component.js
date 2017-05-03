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
let TutorProfileComponent = class TutorProfileComponent {
    constructor(route, router, userRepository) {
        this.route = route;
        this.router = router;
        this.userRepository = userRepository;
        this.tutor = { id: 1, email: "jsmith@gmail.com", imagePath: "/johny.jpeg", username: "Johny", password: "1234", firstName: "John", lastName: "Smith",
            bio: "I love teaching!", courses: ["English", "Math", "Physics"], grad_year: 2004, high_school: "Highland Park" };
    }
};
TutorProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tutor-profile',
        templateUrl: 'tutor-profile.component.html',
        styleUrls: ['tutor-profile.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_repository_1.UserRepository])
], TutorProfileComponent);
exports.TutorProfileComponent = TutorProfileComponent;
//# sourceMappingURL=tutor-profile.component.js.map