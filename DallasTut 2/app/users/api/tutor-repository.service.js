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
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let TutorRepository = class TutorRepository {
    constructor(http) {
        this.http = http;
        this._apiUrl = 'api/tutors';
    }
    listAll() {
        return this.http
            .get(this._apiUrl)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    getById(id) {
        return this.http
            .get(`${this._apiUrl}/${id}`)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    add(tutor) {
        return this.http
            .post(this._apiUrl, tutor)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    update(tutor) {
        return this.http
            .put(`${this._apiUrl}/${tutor.id}`, tutor)
            .toPromise()
            .then(() => tutor)
            .catch(x => x.message);
    }
    delete(tutor) {
        return this.http
            .delete(`${this._apiUrl}/${tutor.id}`)
            .toPromise()
            .catch(x => x.message);
    }
    addCourse(course) {
        this.tutor.courses.push(course);
    }
    getIndex(val) {
        for (var i = this.tutor.courses.length; i--;) {
            var course = this.tutor.courses[i];
            if (course == val)
                return i;
        }
        return -1;
    }
    deleteCourse(course) {
        var index = this.getIndex(course);
        this.tutor.courses.splice(index, 1);
    }
};
TutorRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TutorRepository);
exports.TutorRepository = TutorRepository;
//# sourceMappingURL=tutor-repository.service.js.map