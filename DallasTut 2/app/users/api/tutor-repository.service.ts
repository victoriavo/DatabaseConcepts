import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Tutor } from './tutor';

@Injectable()
export class TutorRepository {
	private _apiUrl = 'api/tutors';

	constructor(private http: Http) {}

	tutor: Tutor;

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
        return this.http.post('/api/users', tutor, this.jwt()).map((response: Response) => response.json());
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
