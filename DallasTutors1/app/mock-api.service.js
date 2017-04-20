"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MockApiService = (function () {
    function MockApiService() {
        this.dataStore = {
            default: {
                users: [
                    {
                        id: 1,
                        name: "John Lawrimore",
                        email: "jlawrimore@smu.edu",
                        phoneNumbers: [
                            { number: '2145551212', type: 'mobile' },
                            { number: '9725551212', type: 'home' },
                            { number: '8175551212', type: 'fax' }
                        ]
                    },
                    {
                        id: 2,
                        name: "Joe Smith",
                        email: "jsmith@smu.edu",
                        phoneNumbers: [
                            { number: '2145551212', type: 'mobile' },
                            { number: '9725551212', type: 'home' },
                            { number: '8175551212', type: 'fax' }
                        ]
                    },
                    {
                        id: 3,
                        name: "Tom Jones",
                        email: "tjones@smu.edu",
                        phoneNumbers: [
                            { number: '2145551212', type: 'mobile' },
                            { number: '9725551212', type: 'home' },
                            { number: '8175551212', type: 'fax' }
                        ]
                    }
                ]
            },
            empty: {
                users: []
            }
        };
    }
    MockApiService.prototype.createDb = function () {
        return this.dataStore['default'];
    };
    return MockApiService;
}());
MockApiService = __decorate([
    core_1.Injectable()
], MockApiService);
exports.MockApiService = MockApiService;
//# sourceMappingURL=mock-api.service.js.map