import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TutorRepository } from "../../api/tutor-repository.service";
import { Tutor } from "../../api/tutor";

import { UserRepository } from "../../api/user-repository";
import { Course } from "../../api/course";


@Component({
  moduleId: module.id,
  selector: 'tutor-profile',
  templateUrl: 'tutor-profile.component.html',
  styleUrls: [ 'tutor-profile.component.css' ],
})

export class TutorProfileComponent {
    // tutor : Tutor;
    tutor: any = {};
    courses: any = [];
   
    constructor(private router: Router, 
                private tutorRepository: TutorRepository, 
                private route: ActivatedRoute,
                private userRepository: UserRepository){

                    this.tutorRepository.viewProfile()
                        .subscribe(tutor => this.tutor = tutor);
                    this.getCourses();
                }

    getCourses(){
        this.tutorRepository.getCourses()
            .subscribe(courses => this.courses = courses);
        // this.router.navigateByUrl('/tutor/editCourse');
    }

    editCourses(){
        this.tutorRepository.editCourses(this.tutor);
    }

    logout(){
            this.userRepository.logout()
                .subscribe(x => console.log(x));
            this.router.navigateByUrl('/login');
    }
}
