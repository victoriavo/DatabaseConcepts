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
const tutor_repository_service_1 = require("../users/api/tutor-repository.service");
// import { AlertService, UserService } from '../_services/index';
let TutorRegisterComponent = class TutorRegisterComponent {
    // tutors: Tutor [] = [];
    constructor(router, tutorRepository, route
        /* private userService: UserService,
         private alertService: AlertService*/ ) {
        this.router = router;
        this.tutorRepository = tutorRepository;
        this.route = route;
        this.tutor = {};
        this.loading = false;
    }
    register() {
        this.tutorRepository.signup(this.tutor)
            .subscribe(tutor => this.tutor = tutor);
    }
};
TutorRegisterComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'register.component.html',
        styleUrls: ['register.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        tutor_repository_service_1.TutorRepository,
        router_1.ActivatedRoute
        /* private userService: UserService,
         private alertService: AlertService*/ ])
], TutorRegisterComponent);
exports.TutorRegisterComponent = TutorRegisterComponent;
// if (this.tutorRepository.signUp(this.model))
//     this.router.navigateByUrl('/home');
// }
// this.route.params.subscribe(
//         p => {
//             console.log(p);
//         }
//     )
//     };
//     this.loading = true;
//     this.userService.create(this.model)
//         .subscribe(
//             data => {
//                 this.alertService.success('Registration successful', true);
//                 this.router.navigate(['/login']);
//             },
//             error => {
//                 this.alertService.error(error);
//                 this.loading = false;
//             });
// }
//# sourceMappingURL=tutorRegister.component.js.map