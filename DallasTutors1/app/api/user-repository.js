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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var UserRepository = (function () {
    function UserRepository(http) {
        this.http = http;
        this._apiUrl = 'api/users';
    }
    UserRepository.prototype.listAll = function () {
        return this.http
            .get(this._apiUrl)
            .toPromise()
            .then(function (x) { return x.json().data; })
            .catch(function (x) { return x.message; });
    };
    UserRepository.prototype.getById = function (id) {
        return this.http
            .get(this._apiUrl + "/" + id)
            .toPromise()
            .then(function (x) { return x.json().data; })
            .catch(function (x) { return x.message; });
    };
    UserRepository.prototype.add = function (user) {
        return this.http
            .post(this._apiUrl, user)
            .toPromise()
            .then(function (x) { return x.json().data; })
            .catch(function (x) { return x.message; });
    };
    UserRepository.prototype.update = function (user) {
        return this.http
            .put(this._apiUrl + "/" + user.id, user)
            .toPromise()
            .then(function () { return user; })
            .catch(function (x) { return x.message; });
    };
    UserRepository.prototype.delete = function (user) {
        return this.http
            .delete(this._apiUrl + "/" + user.id)
            .toPromise()
            .catch(function (x) { return x.message; });
    };
    return UserRepository;
}());
UserRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=user-repository.js.map