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
const Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
let HttpService = class HttpService extends http_1.Http {
    constructor(backend, options) {
        let token = localStorage.getItem('auth_token'); // your custom token getter function here
        options.headers.set('Authorization', `Bearer ${token}`);
        super(backend, options);
    }
    request(url, options) {
        let token = localStorage.getItem('auth_token');
        if (typeof url === 'string') {
            if (!options) {
                // let's make option object
                options = { headers: new http_1.Headers() };
            }
            options.headers.set('Authorization', `Bearer ${token}`);
        }
        else {
            // we have to add the token to the url object
            url.headers.set('Authorization', `Bearer ${token}`);
        }
        return super.request(url, options).catch(this.catchAuthError(this));
    }
    catchAuthError(self) {
        // we have to pass HttpService's own instance here as `self`
        return (res) => {
            console.log(res);
            if (res.status === 401 || res.status === 403) {
                // if not authenticated
                console.log(res);
            }
            return Observable_1.Observable.throw(res);
        };
    }
};
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.XHRBackend, http_1.RequestOptions])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map