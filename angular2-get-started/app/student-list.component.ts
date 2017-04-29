import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'student-list',
  template: `
  <section>
    <section *ngIf="isLoading && !errorMessage">
    Loading our hyperdrives!!! Retrieving data...
    </section>
      <ul>
        <!-- this is the new syntax for ng-repeat -->
        <li *ngFor="let student of people">
            <a href="#" [routerLink]="['/students', student.id]">
          {{student.email}}
          </a>
        </li>
      </ul>
      <section *ngIf="errorMessage">
        {{errorMessage}}
      </section>
  </section>
  `
})
export class StudentListComponent implements OnInit{
  student: Student[] = [];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private studentService : StudentService){ }

  ngOnInit(){
    this.studentService
      .getAll()
      .subscribe(
         /* happy path */ p => {
           console.log(p);
         },
         /* error path */ e => this.errorMessage = e,
         /* onComplete */ () => this.isLoading = false);
  }
}