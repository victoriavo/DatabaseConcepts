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
const Observable_1 = require("rxjs/Observable");
const authentication_service_1 = require("../../services/authentication.service");
let StudentRepository = class StudentRepository {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this._apiUrl = 'api/students';
    }
    getData(response) {
        let body = response.json();
        console.log('response', body);
        return body.data || body;
    }
    signUp(student) {
        let options = this.authService.getRequestOptions();
        this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/student/signup', JSON.stringify(student), options)
            .map((res) => res.headers.get('authorization'))
            .catch(this.handleError)
            .subscribe(p => {
            console.log(p);
            sessionStorage.setItem('token', p);
        });
    }
    updateNew(student) {
        let token = sessionStorage.getItem('token');
        console.log(token);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        headers.append('Authorization', token);
        let options = new http_1.RequestOptions({ headers: headers });
        this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/student/newProfile', JSON.stringify(student), options)
            .map((res) => res.headers.get('authorization'))
            .catch(this.handleError)
            .subscribe(p => {
            console.log(p);
            sessionStorage.getItem('token');
        });
    }
    update(student) {
        let token = sessionStorage.getItem('token');
        console.log(token);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        headers.append('Authorization', token);
        let options = new http_1.RequestOptions({ headers: headers });
        this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/student/editProfile', JSON.stringify(student), options)
            .map((res) => res.headers.get('authorization'))
            .catch(this.handleError)
            .subscribe(p => {
            console.log(p);
            sessionStorage.getItem('token');
        });
    }
    viewProfile() {
        let token = sessionStorage.getItem('token');
        console.log(token);
        let headers = new http_1.Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9' });
        headers.append('Authorization', token);
        let options = new http_1.RequestOptions({ headers: headers });
        return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/student/viewProfile', options)
            .map((res) => res.json() || {})
            .catch((error, caught) => {
            console.error(error.json().error || 'Server error');
            return caught;
        });
    }
    getById(id) {
        return this.http
            .get(`${this._apiUrl}/${id}`)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    extractData(res) {
        let body = res.json();
        return body || [];
    }
    handleError(error) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    }
};
StudentRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, authentication_service_1.AuthenticationService])
], StudentRepository);
exports.StudentRepository = StudentRepository;
//# sourceMappingURL=student-repository.service.js.map