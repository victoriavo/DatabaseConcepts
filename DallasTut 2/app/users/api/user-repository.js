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
let UserRepository = class UserRepository {
    constructor(http) {
        this.http = http;
        this._apiUrl = 'api/users';
    }
};
UserRepository = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserRepository);
exports.UserRepository = UserRepository;
// viewProfile(): Observable<User[]>{
//   
//         let headers = new Headers({'Content-Type' : 'application/json'});
//         let options = new RequestOptions({headers: headers});
//       
//      return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/tutor/viewProfile/11', options)
//       .map((res:Response) => res.json())
//       .catch((error:any) => Observable.throw(error.json().error || 'Server errr'));
//    
// }
//   get(id: number): Observable<User[]> {
//     let students$ = this.http
//       .get(`${this.baseUrl}/student/${id}`)
//       .map(mapStudents);
//       return students$;
//   }
//   save(student: Student) : Observable<Response>{
//     // this won't actually work because the StarWars API doesn't
//     // is read-only. But it would look like this:
//     return this.http
//       .put(`${this.baseUrl}/people/${student.id}`, JSON.stringify(student), {headers: this.getHeaders()});
//   }
//   private getHeaders(){
//     let headers = new Headers();
//     headers.append('Accept', 'application/json');
//     return headers;
//   }
// }
// 	listAll() : Promise<User[]>{
// 		return this.http
// 			.get(this._apiUrl)
// 			.toPromise()
// 			.then(x => x.json().data as User[])
// 			.catch(x => x.message);
// 	}
// 	getById(id : number) : Promise<User>{
// 		return this.http
// 			.get(`${this._apiUrl}/${id}`)
// 			.toPromise()
// 			.then(x => x.json().data as User)
// 			.catch(x => x.message);
// 	}
// 	add(user: User) : Promise<User>{
// 		return this.http
// 			.post(this._apiUrl, user)
// 			.toPromise()
// 			.then(x => x.json().data as User)
// 			.catch(x => x.message);
// 	}
// 	update(user: User) : Promise<User>{
// 		return this.http
// 			.put(`${this._apiUrl}/${user.id}`, user)
// 			.toPromise()
// 			.then(() => user)
// 			.catch(x => x.message);
// 	}
// delete(user: User) : Promise<void>{
// 	return this.http
// 		.delete(`${this._apiUrl}/${user.id}`)
// 		.toPromise()
// 		.catch(x => x.message);
// }
//# sourceMappingURL=user-repository.js.map