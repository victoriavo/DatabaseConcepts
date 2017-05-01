import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Tutor } from './tutor';

@Injectable()
export class TutorRepository {
	private _apiUrl = 'api/tutors';

	constructor(private http: Http) {}

	listAll() : Promise<Tutor>{
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

}
