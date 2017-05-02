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
const student_repository_service_1 = require("../../api/student-repository.service");
const student_1 = require("../../api/student");
let StudentEditorComponent = class StudentEditorComponent {
    constructor(router, studentRepository, route) {
        this.router = router;
        this.studentRepository = studentRepository;
        this.route = route;
    }
    ngOnInit() {
        var onLoad = (data) => {
            this.student = data;
        };
        this.route.params.subscribe(params => {
            if (params['id'] !== undefined) {
                this.studentRepository.getById(+params['id'])
                    .then(onLoad);
            }
            else
                this.student = new student_1.Student();
        });
    }
    save() {
        if (this.student.id)
            this.studentRepository.update(this.student);
        else
            this.studentRepository.add(this.student);
        this.router.navigateByUrl('/');
    }
};
StudentEditorComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'student-editor',
        templateUrl: 'student-editor.component.html',
        styleUrls: ['student-editor.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        student_repository_service_1.StudentRepository,
        router_1.ActivatedRoute])
], StudentEditorComponent);
exports.StudentEditorComponent = StudentEditorComponent;
//# sourceMappingURL=student-editor.component.js.map