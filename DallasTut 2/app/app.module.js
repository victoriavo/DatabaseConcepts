"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/http");
const app_component_1 = require("./app.component");
const app_routing_1 = require("./app.routing");
const index_1 = require("./home/index");
const index_2 = require("./login/index");
const users_module_1 = require("./users/users.module");
const index_3 = require("./studentRegister/index");
const index_4 = require("./tutorRegister/index");
const alert_service_1 = require("./services/alert.service");
const authentication_service_1 = require("./services/authentication.service");
const auth_guard_1 = require("./services/auth.guard");
const http_service_1 = require("./services/http.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_1.routing,
            users_module_1.UsersModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            index_1.HomeComponent,
            index_2.LoginComponent,
            index_3.StudentRegisterComponent,
            index_4.TutorRegisterComponent,
        ],
        providers: [
            authentication_service_1.AuthenticationService,
            alert_service_1.AlertService,
            auth_guard_1.AuthGuard,
            {
                provide: http_service_1.HttpService,
                useFactory: (backend, options) => {
                    return new http_service_1.HttpService(backend, options);
                },
                deps: [http_1.XHRBackend, http_1.RequestOptions]
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map