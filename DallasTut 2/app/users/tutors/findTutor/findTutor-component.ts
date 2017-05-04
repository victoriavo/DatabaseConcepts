import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TutorRepository } from "../../api/tutor-repository.service";
import { Tutor } from "../../api/tutor";


@Component({
  moduleId: module.id,
  selector: 'findTutor',
  templateUrl: 'findTutor.html',
  styleUrls: [ 'findTutor.css' ],
})

export class FindTutorComponent {
    tutors : any = [];
    keys: any = [];
    imagesarray :any= []; 
	
	constructor(private tutorRepository : TutorRepository, private router: Router){
    this.tutorRepository.findTutor()
                    .subscribe(tutor => this.tutors = tutor);
                    console.log(this.tutors);
                    this.keys = Object.keys(this.tutors);
      this.imagesarray = ['/app/users/tutors/findTutor/curry.jpeg', '/app/users/tutors/findTutor/sss.jpg',
      '/app/users/tutors/findTutor/ey.jpg', '/app/users/tutors/findTutor/girl.jpg', '/app/users/tutors/findTutor/asdf.jpg',
      '/app/users/tutors/findTutor/ffff.jpg', '/app/users/tutors/findTutor/square.jpeg', '/app/users/tutors/findTutor/1234.jpg',
      '/app/users/tutors/findTutor/student.jpg', '/app/users/tutors/findTutor/stancliffe.jpg', '/app/users/tutors/findTutor/tony.jpg'];
                  
      
  };

  createRange(number){
    {
  var items: number[] = [];
  for(var i = 1; i <= number; i++){
     items.push(i);
  }
  return items;
}
  }
}