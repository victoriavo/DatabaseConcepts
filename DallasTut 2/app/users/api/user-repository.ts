import { User } from './user';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import { HttpService } from "../../services/http.service";
import { AuthenticationService } from "../../services/authentication.service";
import { Router } from "@angular/router";

@Injectable()
export class UserRepository {
	private _apiUrl = 'api/users';

	constructor(private http: HttpService, private authService: AuthenticationService, private router: Router) {}


   login(user: any){
		let options = this.authService.getRequestOptions();
		this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/login', JSON.stringify(user), options)
			.map((res:Response) => res.headers.get('authorization'))
			.catch(this.handleError)
			.subscribe(p =>{ 
				console.log(p);
				sessionStorage.setItem('token', p);
		});
	}

	logout(): Observable<object>{
		let options = this.setOptions();
		// let token = sessionStorage.getItem('token');
		// console.log(token);
		// let headers = new Headers({'Content-Type' : 'application/json'});
		// headers.append('Authorization', token);
		// let options = this.authService.getRequestOptions();

		return this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/logout', options)
			.map((res:Response) => res.headers.get('authorization'))
			.catch(this.handleError);
	}

	setOptions(): RequestOptions{
		let token = sessionStorage.getItem('token');
		console.log(token);
		let headers = new Headers({'Content-Type' : 'application/json'});
		headers.append('Authorization', token);
		return this.authService.getRequestOptions();
	}

	extractData(res:Response) {
		let body = res.json();
		return body || [];
	}

	handleError(error:any) {
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}

  private getHeaders(){
	    let headers = new Headers();
	    headers.append('Accept', 'application/json');
	    return headers;
  }

	getById(id : number) : Promise<User>{
		return this.http
			.get(`${this._apiUrl}/${id}`)
			.toPromise()
			.then(x => x.json().data as User)
			.catch(x => x.message);
	}
	
	add(user: User) : Promise<User>{
		return this.http
			.post(this._apiUrl, user)
			.toPromise()
			.then(x => x.json().data as User)
			.catch(x => x.message);
	}
	
	update(user: User) : Promise<User>{
		return this.http
			.put(`${this._apiUrl}/${user.id}`, user)
			.toPromise()
			.then(() => user)
			.catch(x => x.message);
	}

	delete(user: User) : Promise<void>{
		return this.http
			.delete(`${this._apiUrl}/${user.id}`)
			.toPromise()
			.catch(x => x.message);
	}
}
