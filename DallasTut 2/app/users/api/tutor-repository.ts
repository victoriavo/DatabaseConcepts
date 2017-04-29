import { Tutor } from './tutor';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserRepository {
	private _apiUrl = 'api/tutors';

	constructor(private http: Http) {}
}