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
// used to create fake backend
// import { fakeBackendProvider } from './_helpers/index';
// import { MockBackend, MockConnection } from '@angular/http/testing';
const http_2 = require("@angular/http");
const app_component_1 = require("./app.component");
const app_routing_1 = require("./app.routing");
// import { AlertComponent } from './_directives/index';
// import { AuthGuard } from './_guards/index';
// import { AlertService, AuthenticationService, UserService } from './_services/index';
const index_1 = require("./home/index");
const index_2 = require("./login/index");
const index_3 = require("./register/index");
const users_module_1 = require("./users/users.module");
const about_us_component_1 = require("./aboutUs/about-us.component");
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
            // AlertComponent,
            index_1.HomeComponent,
            index_2.LoginComponent,
            index_3.RegisterComponent,
            about_us_component_1.AboutUsComponent,
        ],
        providers: [
            // AuthGuard,
            // AlertService,
            // AuthenticationService,
            // UserService,
            // // providers used to create fake backend
            // fakeBackendProvider,
            // MockBackend,
            http_2.BaseRequestOptions
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map