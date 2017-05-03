import { User } from './user';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserRepository {
	private _apiUrl = 'api/users';

	constructor(private http: Http) {}
//   getAll(): Promise<void>{
//         let body = {
//             "email" :  "testuser2",
//             "password" : "testpass2"
//         };

//         let bodyString = JSON.stringify(body);
//         let headers = new Headers({'Content-Type' : 'application/json'});
//         let options = new RequestOptions({headers: headers});
//       
//      return this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/login', body, options)
//       .map((res:Response) => res.json())
//       .catch((error:any) => Observable.throw(error.json().error || 'Server errr'));
//     // let student$ = this.http
//     // .get(`${this.baseUrl}/login`)
//     //   .map((res: Response) => res.json())
//     //   .catch(handleError);
//     //   return student$;
  }

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
