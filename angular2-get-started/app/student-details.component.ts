import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Response } from '@angular/http';

import { Student } from './student';
import { StudentService } from './student.service';

@Component({
  selector: 'student-details',
  templateUrl: 'app/student-details.component.html'
})
export class StudentDetailsComponent implements OnInit, OnDestroy {
    student: any;
    sub: any;

    constructor(private studentService: StudentService,
                private route: ActivatedRoute,
                private router: Router){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
          let id = Number.parseInt(params['id']);
          console.log('getting person with id: ', id);
          this.studentService
            .get(id)
            .subscribe(p => this.student = p);
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    gotoStudentsList(){
        let link = ['/students'];
        this.router.navigate(link);
    }

    saveStudentDetails(){
      this.studentService
          .save(this.student)
          .subscribe(
            (r: Response) => {console.log('success');}
          );
    }
}