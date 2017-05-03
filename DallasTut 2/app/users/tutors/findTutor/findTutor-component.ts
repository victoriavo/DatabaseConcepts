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
    tutors : Tutor[];
	
	constructor(private tutorRepository : TutorRepository, private router: Router){
			  this.tutorRepository.findTutor()
                    .subscribe(x => console.log(x));
        ;
	}
}