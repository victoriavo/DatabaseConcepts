import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from "../../api/student";
import { StudentRepository } from "../../api/student-repository.service";
// import { UserRepository } from "../../api/user-repository";
// import { User } from "../../api/user";

@Component({
  moduleId: module.id,
  selector: 'student-profile',
  templateUrl: 'student-profile.component.html',
  styleUrls: [ 'student-profile.component.css' ],
})

export class StudentProfileComponent {
   student : Student;
   
    constructor(private router: Router, 
                private studentRepository: StudentRepository, 
                private route: ActivatedRoute){}

    ngOnInit() {
        var onLoad = (data) => {
            this.student = data;
        };

        this.route.params.subscribe(params => {
            if(params['id'] !== undefined) {
                this.studentRepository.getById(+params['id'])
                    .then(onLoad);
            } 
        });
    }

}