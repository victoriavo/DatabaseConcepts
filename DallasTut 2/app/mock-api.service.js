"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let MockApiService = class MockApiService {
    constructor() {
        this.dataStore = {
            default: {
                tutors: [
                    { id: 1, email: "jsmith@gmail.com", imagePath: "./app/images/johny.jpeg", username: "johny", password: "1234", firstName: "John", lastName: "Smith",
                        bio: "I love teaching!", courses: ["English", "Math", "Physics"], grad_year: 2004, high_school: "Highland Park" },
                    { id: 2, email: "jdoe@gmail.com", imagePath: "./app/images/jane.jpeg", username: "jane", password: "4567", firstName: "Jane", lastName: "Doe",
                        bio: "I am passionate about helping others!", courses: ["English", "Math", "Physics"], grad_year: 2010, high_school: "ThisSchool High" },
                ],
                students: [
                    { id: 1, email: "dwade@gmail.com", imagePath: "./app/images/dee.jpeg", username: "dwade", password: "1234", firstName: "Dwyane", lastName: "Wade",
                        bio: "I need help!", courses: ["English", "Math", "Spanish"], grad_year: 2017, high_school: "Highland Park" },
                    { id: 2, email: "scurry@gmail.com", imagePath: "./app/images/curry.jpeg", username: "steph", password: "4567", firstName: "Stephen", lastName: "Curry",
                        bio: "I need a tutor!", courses: ["English", "Math", "Physics"], grad_year: 2010, high_school: "ThisSchool High" },
                ]
            },
            empty: {
                tutors: [],
                students: []
            }
        };
    }
    createDb() {
        return this.dataStore['default'];
    }
};
MockApiService = __decorate([
    core_1.Injectable()
], MockApiService);
exports.MockApiService = MockApiService;
//# sourceMappingURL=mock-api.service.js.map