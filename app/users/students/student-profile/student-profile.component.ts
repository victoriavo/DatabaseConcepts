import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRepository } from "../../api/user-repository";
import { User2 } from "../../api/user";



@Component({
  moduleId: module.id,
  selector: 'student-profile',
  templateUrl: 'student-profile.component.html',
  styleUrls: [ 'student-profile.component.css' ],
})

export class StudentProfileComponent {
    student : User2;
    title: "Student Profile";
   
    constructor(private route: ActivatedRoute, 
                private router: Router, 
                private userRepository: UserRepository){

    this.student = {
        id:1,
        first_name: "Trevor",
        last_name: "Parker",
        bio: "My name is Trevor, I'm in 10th grade and I need help in Calculus AB and AP English.  I learn best by working out problems step by step.",
        classes: [ "Calculus AB", "AP English Literature"],
        photo: "/app/images/student.jpeg",
        high_school: "Highland Park High School",
        
        }
    
  }
}

