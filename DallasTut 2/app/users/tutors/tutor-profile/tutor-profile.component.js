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
let TutorProfileComponent = class TutorProfileComponent {
    constructor(route, router, tutorRepository) {
        this.route = route;
        this.router = router;
        this.tutorRepository = tutorRepository;
        tutorRepository.getById(1)
            .then(x => this.tutor = x);
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
        tutor_repository_service_1.TutorRepository])
], TutorProfileComponent);
exports.TutorProfileComponent = TutorProfileComponent;
//      save(){
//          if(this.tutor.id){
//             this.tutorRepository.update(this.tutor);
// 		    this.router.navigateByUrl('');
//          }else{
// 		    this.tutorRepository.add(this.tutor);
// 		    this.router.navigateByUrl('');
//          }
// 	}
//# sourceMappingURL=tutor-profile.component.js.map