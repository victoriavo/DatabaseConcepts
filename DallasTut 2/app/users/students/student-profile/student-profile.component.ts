import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Student } from "../../api/student";
import { StudentRepository } from "../../api/student-repository.service";
import { UserRepository } from "../../api/user-repository";
// import { UserRepository } from "../../api/user-repository";
// import { User } from "../../api/user";

@Component({
  moduleId: module.id,
  selector: 'student-profile',
  templateUrl: 'student-profile.component.html',
  styleUrls: [ 'student-profile.component.css' ],
})

export class StudentProfileComponent {
   
    student: any = {};
   
    constructor(private router: Router, 
                private studentRepository: StudentRepository, 
                private route: ActivatedRoute,
                private userRepository: UserRepository){

                    this.studentRepository.viewProfile()
                        .subscribe(student => this.student = student);

    }
}