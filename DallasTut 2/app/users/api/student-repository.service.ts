import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Student } from './student';

@Injectable()
export class StudentRepository {
	private _apiUrl = 'api/students';

	constructor(private http: Http) {}

	listAll() : Promise<Student[]>{
		return this.http
			.get(this._apiUrl)
			.toPromise()
			.then(x => x.json().data as Student[])
			.catch(x => x.message);
	}

	getById(id : number) : Promise<Student>{
		return this.http
			.get(`${this._apiUrl}/${id}`)
			.toPromise()
			.then(x => x.json().data as Student)
			.catch(x => x.message);
	}
	
	add(student: Student) : Promise<Student>{
		return this.http
			.post(this._apiUrl, student)
			.toPromise()
			.then(x => x.json().data as Student)
			.catch(x => x.message);
	}
	
	update(student: Student) : Promise<Student>{
		return this.http
			.put(`${this._apiUrl}/${student.id}`, student)
			.toPromise()
			.then(() => student)
			.catch(x => x.message);
	}

	delete(student: Student) : Promise<void>{
		return this.http
			.delete(`${this._apiUrl}/${student.id}`)
			.toPromise()
			.catch(x => x.message);
	}

}
