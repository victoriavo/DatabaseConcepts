import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TutorRepository } from "../../api/tutor-repository.service";
import { Tutor } from "../../api/tutor";


@Component({
  moduleId: module.id,
  selector: 'tutor-profile',
  templateUrl: 'tutor-profile.component.html',
  styleUrls: [ 'tutor-profile.component.css' ],
})

export class TutorProfileComponent {
    // tutor : Tutor;
    tutor: any = {};

   
    constructor(private router: Router, 
                private tutorRepository: TutorRepository, 
                private route: ActivatedRoute){

                    this.tutorRepository.viewProfile()
                        .subscribe(tutor => this.tutor = tutor)
                }

    // ngOnInit() {
    //     var onLoad = (data) => {
    //         this.tutor = data;
    //     };

    //     this.route.params.subscribe(params => {
    //         if(params['id'] !== undefined) {
    //             this.tutorRepository.getById(+params['id'])
    //                 .then(onLoad);
    //         } 
    //     });
    // }



}
