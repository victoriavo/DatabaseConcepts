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
const authentication_service_1 = require("../services/authentication.service");
const alert_service_1 = require("../services/alert.service");
const user_repository_1 = require("../users/api/user-repository");
let LoginComponent = class LoginComponent {
    constructor(route, router, userRepository, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.userRepository = userRepository;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.user = {};
        this.loading = false;
    }
    login() {
        this.userRepository.login(this.user);
        this.router.navigateByUrl('/home');
    }
};
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        user_repository_1.UserRepository,
        authentication_service_1.AuthenticationService,
        alert_service_1.AlertService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//        ngOnInit() {
//     // reset login status
//     this.authenticationService.logout();
//     // get return url from route parameters or default to '/'
//     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
// }
// login() {
//     this.loading = true;
//     this.authenticationService.login(this.user.email, this.user.password)
//         .subscribe(
//             data => {
//                 this.router.navigate([this.returnUrl]);
//             },
//             error => {
//                 this.alertService.error(error);
//                 this.loading = false;
//             });
//         this.router.navigateByUrl('/home');
// }
//# sourceMappingURL=login.component.js.map