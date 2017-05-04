import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Tutor } from './tutor';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthenticationService } from "../../services/authentication.service";
import { AlertService } from "../../services/alert.service";

@Injectable()
export class TutorRepository {
		
	// private _apiUrl = 'api/tutors';

	private _apiUrl = 'http://52.27.67.68/testingdallastutors/public/index.php/tutor/signup';

	constructor(private http: Http, private alertService: AlertService, private authService: AuthenticationService) {}

	tutor: Tutor;

	 getData(response: Response){
		let body = response.json();
		console.log('response', body);
		return body.data || body;
	}

	 signUp(tutor: any){
		let options = this.authService.getRequestOptions();
		this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/tutor/signup', JSON.stringify(tutor), options)
			.map((res:Response) => res.headers.get('authorization'))
			.catch(this.handleError)
			.subscribe(p =>{ this.alertService.success('Registration successful', true);
				sessionStorage.setItem('token', p);
		
			
		});
	}

	setOptions(): RequestOptions{
		let token = sessionStorage.getItem('token');
		console.log(token);
		let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
		headers.append('Authorization', token);
		return new RequestOptions({headers: headers});

	}

	updateNew(tutor: any){
		// let token = sessionStorage.getItem('token');
		// console.log(token);
		// let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
		// headers.append('Authorization', token);
		// let options = new RequestOptions({headers: headers});
		let options = this.setOptions();

		this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/tutor/newProfile', JSON.stringify(tutor), options)
			.map((res:Response) => res.headers.get('authorization'))
			.catch(this.handleError)
			.subscribe(p =>{ console.log(p);
				sessionStorage.getItem('token');
			});
		
	}

	update(tutor: any){
		let options = this.setOptions();

		this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/tutor/editProfile', JSON.stringify(tutor), options)
			.map((res:Response) => res.headers.get('authorization'))
			.catch(this.handleError)
			.subscribe(p =>{ console.log(p);
				sessionStorage.getItem('token');
			});
		
	}

	getCourses(): Observable<object>{
		let options = this.setOptions();

		return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/tutor/editCourse', options)
			.map(this.extractData)
			.catch(this.handleError);
	}

	editCourses(tutor: any){
		let options = this.setOptions();

		this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/tutor/editCourse',JSON.stringify(tutor), options)
			.map((res:Response) => res.headers.get('authorization'))
			.catch(this.handleError)
			.subscribe(p =>{ console.log(p);
				sessionStorage.getItem('token');
			});
	}



	viewProfile(): Observable<object>{
		let options = this.setOptions();

		return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/tutor/viewProfile', options)
				.map((res:Response) => res.json() || {})
				.catch((error:any, caught: Observable<any>) => {
					console.error(error.json().error || 'Server error');
					return caught;
				});
	}

	getTutor(id: number): Observable<Tutor>{
	
		let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
		let options = new RequestOptions({headers: headers});

		return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/alltutors', options)
			.map(this.extractData)
			.catch(this.handleError);

	}


	getAll(): Observable<Tutor[]>{
		let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
		let options = new RequestOptions({headers: headers});

		return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/alltutors', options)
		.map((res:Response) => res.json() || {})
		.catch((error:any, caught: Observable<any>) => {
			console.error(error.json().error || 'Server error');
			return caught;
		});
	}


	findTutor(): Observable<Observable<Tutor[]>>{
		return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/findTutor/')
			.map((res:Response) => res.json() || {})
			.catch((error:any, caught: Observable<any>) => {
			console.error(error.json().error || 'Server error');
			return caught;
		});
	}
	listAll() : Promise<Tutor[]>{
		return this.http
			.get(this._apiUrl)
			.toPromise()
			.then(x => x.json().data as Tutor)
			.catch(x => x.message);
	}

	getById(id : number) : Promise<Tutor>{
		return this.http
			.get(`${this._apiUrl}/${id}`)
			.toPromise()
			.then(x => x.json().data as Tutor)
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
