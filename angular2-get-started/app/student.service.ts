import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Student } from './student';
import { HttpService } from './http.service';

@Injectable()
export class StudentService{
  private baseUrl: string = 'https://private-a00c35-dallastutors1.apiary-mock.com';
  constructor(private http : HttpService){
  }

  getAll(): Observable<String>{
        let body = {
            "email" :  "testuser2",
            "password" : "testpass2"
        };

        let bodyString = JSON.stringify(body);
        let headers = new Headers({'Content-Type' : 'application/json', 'Accept' : 'q=0.8;application/json;q=0.9'});
        let options = new RequestOptions({headers: headers});
      
     return this.http.post('http://52.27.67.68/testingdallastutors/public/index.php/login', body, options)
      .map((res:Response) => res.headers.get('Authorization'))
      .catch((error:any) => Observable.throw(error.json().error || 'Server errr'));
    // let student$ = this.http
    // .get(`${this.baseUrl}/login`)
    //   .map((res: Response) => res.json())
    //   .catch(handleError);
    //   return student$;
  }

viewProfile(): Observable<Student[]>{
  

        let headers = new Headers({'Content-Type' : 'application/json'});
        let options = new RequestOptions({headers: headers});
      
     return this.http.get('http://52.27.67.68/testingdallastutors/public/index.php/tutor/viewProfile/11', options)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server errr'));
   
}

  get(id: number): Observable<Student[]> {
    let students$ = this.http
      .get(`${this.baseUrl}/student/${id}`)
      .map(mapStudents);
      return students$;
  }

  save(student: Student) : Observable<Response>{
    // this won't actually work because the StarWars API doesn't
    // is read-only. But it would look like this:
    return this.http
      .put(`${this.baseUrl}/people/${student.id}`, JSON.stringify(student), {headers: this.getHeaders()});
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }
}

function mapStudents(response:Response): Student[]{
   // uncomment to simulate error:
   // throw new Error('ups! Force choke!');

   // The response of the API has a results
   // property with the actual results
   return response.json().results.map(toStudent)
}

function toStudent(r:any): Student{
  let student = <Student>({
    id: extractId(r),
    email: r.email,
    password: r.email,
  });
  console.log('Parsed student:', student);
  return student;
}

// to avoid breaking the rest of our app
// I extract the id from the person url
function extractId(studentData:any){
  let extractedId = studentData.url.replace('https://private-a00c35-dallastutors1.apiary-mock.com/login/','').replace('/','');
  return parseInt(extractedId);
}

function mapStudent(response:Response): Student{
  // toPerson looks just like in the previous example
  return toStudent(response.json());
}

// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Shit don't work yo`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}