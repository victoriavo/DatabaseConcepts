import { Student } from './student';
import { Injectable } from '@angular/core';
import { RequestOptions, Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserRepository {
	private _apiUrl = 'api/students';

	constructor(private http: Http) {}
}