import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Tutor } from './tutor';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class TutorRepository {
	// private _apiUrl = 'api/tutors';

	private _apiUrl = 'http://52.27.67.68/testingdallastutors/public/index.php/tutor/signup';

	constructor(private http: Http) {}

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



	 public signUp(user: any): Observable<Tutor> {
		let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
		let options = new RequestOptions({headers: headers});

		return this.http.post(this._apiUrl, options)
		.map((res:Response) => res.json() || {})
		.catch((error:any, caught: Observable<any>) => {
			console.error(error.json().error || 'Server error');
			return caught;
		});
	}

	// send(user: any): Promise<Tutor> {
	// 	return this.http
	// 	.post(this._apiUrl, user)
	// 	.toPromise()
	// 	.then(this.getData)
	// 	.catch(x => x.message);
	// }


getAll(): Observable<Tutor[]>{
	let body = {
	"email" : "mmuralidhar@smu.edu",
	"password" : "password"
	};

	let bodyString = JSON.stringify(body);
	let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
	let options = new RequestOptions({headers: headers});

	return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/alltutors', options)
	.map((res:Response) => res.json() || {})
	.catch((error:any, caught: Observable<any>) => {
		console.error(error.json().error || 'Server error');
		return caught;
	});
	// let student$ = this.http
	// .get(`${this.baseUrl}/login`)
	// .map((res: Response) => res.json())
	// .catch(handleError);
	// return student$;
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
	
	update(tutor: Tutor) : Promise<Tutor>{
		return this.http
			.put(`${this._apiUrl}/${tutor.id}`, tutor)
			.toPromise()
			.then(() => tutor)
			.catch(x => x.message);
	}

	delete(tutor: Tutor) : Promise<void>{
		return this.http
			.delete(`${this._apiUrl}/${tutor.id}`)
			.toPromise()
			.catch(x => x.message);
	}

	addCourse(course: string) {
		this.tutor.courses.push(course);
	}

	getIndex(val: string){
		for (var i = this.tutor.courses.length; i--;) {
			var course = this.tutor.courses[i];
			if(course == val) return i;
		}
		return -1;
	}

	deleteCourse(course: string) {
		var index = this.getIndex(course);
		this.tutor.courses.splice(index, 1);
	}

	create(tutor: Tutor) {
        return this.http.post(this._apiUrl, tutor, this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

}
