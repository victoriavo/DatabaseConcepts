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
class AboutUs {
}
exports.AboutUs = AboutUs;
let AboutUsComponent = class AboutUsComponent {
    constructor() {
        this.members = [
            { name: 'Adrien Ibarra', bio: 'BS Computer Science', imagePath: '/app/images/Adrien.jpg' },
            { name: 'Eva Ruggiero', bio: 'BS Computer Science', imagePath: '/app/images/Eva.jpg' },
            { name: 'Jacob Hillman', bio: 'BS Computer Science', imagePath: '/app/images/Jacob.jpg' },
            { name: 'Marietou Diallo', bio: 'BS Computer Science', imagePath: '/app/images/Yeem.jpg' },
            { name: 'Maya Muralidhar', bio: 'BS Computer Science', imagePath: '/app/images/Maya.jpg' },
            { name: 'Victoria Vo', bio: 'BS Computer Science', imagePath: '/app/images/Victoria.jpg' },
        ];
        this.title = "About Dallas Tutors";
    }
};
AboutUsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'about-us',
        templateUrl: 'about-us.component.html',
        styleUrls: ['about-us.component.css']
    }),
    __metadata("design:paramtypes", [])
], AboutUsComponent);
exports.AboutUsComponent = AboutUsComponent;
//# sourceMappingURL=about-us.component.js.map