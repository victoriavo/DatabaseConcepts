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
const user_repository_1 = require("../users/api/user-repository");
const router_1 = require("@angular/router");
// import { User } from '../users/api/user';
// import { UserRepository } from "../users/api/user-repository";
let Home2Component = class Home2Component {
    // users: User[] = [];
    constructor(userRepository, router) {
        this.userRepository = userRepository;
        this.router = router;
    }
    logout() {
        this.userRepository.logout()
            .subscribe(x => console.log(x));
        this.router.navigateByUrl('/login');
    }
};
Home2Component = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home2.component.html',
        styleUrls: ['home.component.css'],
    }),
    __metadata("design:paramtypes", [user_repository_1.UserRepository, router_1.Router])
], Home2Component);
exports.Home2Component = Home2Component;
//# sourceMappingURL=home2.component.js.map