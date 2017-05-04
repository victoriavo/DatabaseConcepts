import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Tutor } from './tutor';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { AuthenticationService } from "../../services/authentication.service";

@Injectable()
export class TutorRepository {
		
	// private _apiUrl = 'api/tutors';

	private _apiUrl = 'http://52.27.67.68/testingdallastutors/public/index.php/tutor/signup';

	constructor(private http: Http, private authService: AuthenticationService) {}

	tutor: Tutor;

	 getData(response: Response){
		let body = response.json();
		console.log('response', body);
		return body.data || body;
	}

	//  public signUp(user: any): Promise<Tutor> {
	// 	return this.http
	// 	.post(this._apiUrl, user)
	// 	.toPromise()
	// 	.then(this.getData)
	// 	.catch(x => x.message);
	// }

	// login(): Observable<object> {

	// 	let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
	// 	let options = new RequestOptions({headers: headers});
	// 	let body 

	// 	return this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/tutor/login',  JSON.stringify(body), options)
	// 		.map(this.extractData)
	// 		.catch(this.handleError);
	// }



	 signUp(tutor: any){
		let options = this.authService.getRequestOptions();
		this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/tutor/signup', JSON.stringify(tutor), options)
			.map((res:Response) => res.headers.get('authorization'))
			.catch(this.handleError)
			.subscribe(p =>{ console.log(p);
				localStorage.setItem('token', p);
			
	});


		// let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
		// let options = new RequestOptions({headers: headers});

		// console.log(JSON.stringify(tutor))

		// return this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/tutor/signup',  JSON.stringify(tutor), options)
		// 	.map(this.extractData)
		// 	.catch(this.handleError);
	}


	update(tutor: any){
		let token = localStorage.getItem('token');
		console.log(token);
		let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
		headers.append('Authorization', token);
		let options = new RequestOptions({headers: headers});
		// console.log(token);
		// let options = this.authService.getRequestOptions();
		this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/tutor/newProfile', JSON.stringify(tutor), options)
			.map((res:Response) => res.headers.get('authorization'))
			.catch(this.handleError)
			.subscribe(p =>{ console.log(p);
				localStorage.getItem('token');
			});
		
	}

	getTutor(id: number): Observable<Tutor>{
	
		let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
		let options = new RequestOptions({headers: headers});

		return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/alltutors', options)
			.map(this.extractData)
			.catch(this.handleError);

	}


	// send(user: any): Promise<Tutor> {
	// 	return this.http
	// 	.post(this._apiUrl, user)
	// 	.toPromise()
	// 	.then(this.getData)
	// 	.catch(x => x.message);
	// }


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



findTutor(): Observable<Tutor[]>{
	return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/alltutors')
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
	
	add(tutor: Tutor) : Promise<Tutor>{
		return this.http
			.post(this._apiUrl, tutor)
			.toPromise()
			.then(x => x.json().data as Tutor)
			.catch(x => x.message);
	}
	
	// update(tutor: Tutor) : Promise<Tutor>{
	// 	return this.http
	// 		.put(`${this._apiUrl}/${tutor.id}`, tutor)
	// 		.toPromise()
	// 		.then(() => tutor)
	// 		.catch(x => x.message);
	// }

	delete(tutor: Tutor) : Promise<void>{
		return this.http
			.delete(`${this._apiUrl}/${tutor.id}`)
			.toPromise()
			.catch(x => x.message);
	}


    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
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
