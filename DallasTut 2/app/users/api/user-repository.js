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
const Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/toPromise");
const http_service_1 = require("../../services/http.service");
const authentication_service_1 = require("../../services/authentication.service");
const router_1 = require("@angular/router");
let UserRepository = class UserRepository {
    constructor(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
        this._apiUrl = 'api/users';
    }
    login(user) {
        //         let headers = new Headers({'Content-Type' : 'application/json'});
        //         let options = new RequestOptions({headers: headers});
        // console.log(JSON.stringify(user));
        let options = this.authService.getRequestOptions();
        this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/login', JSON.stringify(user), options)
            .map((res) => res.headers.get('authorization'))
            .catch(this.handleError)
            .subscribe(p => {
            console.log(p);
            localStorage.setItem('token', p);
        });
    }
    logout(user) {
    }
    extractData(res) {
        let body = res.json();
        return body || [];
    }
    handleError(error) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Rx_1.Observable.throw(errMsg);
    }
    getHeaders() {
        let headers = new http_1.Headers();
        headers.append('Accept', 'application/json');
        return headers;
    }
    getById(id) {
        return this.http
            .get(`${this._apiUrl}/${id}`)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    add(user) {
        return this.http
            .post(this._apiUrl, user)
            .toPromise()
            .then(x => x.json().data)
            .catch(x => x.message);
    }
    update(user) {
        return this.http
            .put(`${this._apiUrl}/${user.id}`, user)
            .toPromise()
            .then(() => user)
            .catch(x => x.message);
    }
    delete(user) {
        return this.http
            .delete(`${this._apiUrl}/${user.id}`)
            .toPromise()
            .catch(x => x.message);
    }
};
UserRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_service_1.HttpService, authentication_service_1.AuthenticationService, router_1.Router])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.js.map