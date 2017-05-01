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
const tutor_1 = require("../../api/tutor");
// import { Tutor } from "../../index";
let TutorEditorComponent = class TutorEditorComponent {
    constructor(router, tutorRepository, route) {
        this.router = router;
        this.tutorRepository = tutorRepository;
        this.route = route;
    }
    ngOnInit() {
        var onLoad = (data) => {
            this.tutor = data;
        };
        this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                this.tutorRepository.getById(+params['id'])
                    .then(onLoad);
            }
            else
                this.tutor = new tutor_1.Tutor();
        });
    }
    save() {
        if (this.tutor.id)
            this.tutorRepository.update(this.tutor);
        else
            this.tutorRepository.add(this.tutor);
        this.router.navigateByUrl('/');
    }
};
TutorEditorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'tutor-editor',
        templateUrl: 'tutor-editor.component.html',
        styleUrls: ['tutor-editor.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        tutor_repository_service_1.TutorRepository,
        router_1.ActivatedRoute])
], TutorEditorComponent);
exports.TutorEditorComponent = TutorEditorComponent;
//# sourceMappingURL=tutor-editor.component.js.map