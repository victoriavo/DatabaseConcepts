import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Student } from './student';
import { Observable } from "rxjs/Observable";
import { AuthenticationService } from "../../services/authentication.service";

@Injectable()
export class StudentRepository {
	private _apiUrl = 'api/students';

	constructor(private http: Http, private authService: AuthenticationService) {}

	private getData(response: Response){
		let body = response.json();
		console.log('response', body);
		return body.data || body;
	}

	 signUp(student: any){
		let options = this.authService.getRequestOptions();
		this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/student/signup', JSON.stringify(student), options)
			.map((res:Response) => res.headers.get('authorization'))
			.catch(this.handleError)
			.subscribe(p =>{ console.log(p);
				sessionStorage.setItem('token', p);	
		});
	}

	
	updateNew(student: any){
		let token = sessionStorage.getItem('token');
		console.log(token);
		let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
		headers.append('Authorization', token);
		let options = new RequestOptions({headers: headers});

		this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/student/newProfile', JSON.stringify(student), options)
			.map((res:Response) => res.headers.get('authorization'))
			.catch(this.handleError)
			.subscribe(p =>{ console.log(p);
				sessionStorage.getItem('token');
			});
		
	}

	update(student: any){
		let token = sessionStorage.getItem('token');
		console.log(token);
		let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
		headers.append('Authorization', token);
		let options = new RequestOptions({headers: headers});

		this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/student/editProfile', JSON.stringify(student), options)
			.map((res:Response) => res.headers.get('authorization'))
			.catch(this.handleError)
			.subscribe(p =>{ console.log(p);
				sessionStorage.getItem('token');
			});
		
	}

	viewProfile(): Observable<object>{
		let token = sessionStorage.getItem('token');
		console.log(token);
		let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
		headers.append('Authorization', token);
		let options = new RequestOptions({headers: headers});

		return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/student/viewProfile', options)
				.map((res:Response) => res.json() || {})
				.catch((error:any, caught: Observable<any>) => {
					console.error(error.json().error || 'Server error');
					return caught;
				});
	}

	getById(id : number) : Promise<Student>{
		return this.http
			.get(`${this._apiUrl}/${id}`)
			.toPromise()
			.then(x => x.json().data as Student)
			.catch(x => x.message);
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


	


    

}
