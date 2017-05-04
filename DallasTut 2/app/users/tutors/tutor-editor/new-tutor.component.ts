import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TutorRepository } from "../../api/tutor-repository.service";
import { Tutor } from "../../api/tutor";

@Component({
  moduleId: module.id,
  selector: 'new-tutor',
  templateUrl: 'new-tutor.component.html',
  styleUrls: [ 'tutor-editor.component.css' ],
})

export class NewTutorComponent {
  tutor: Tutor;

   constructor(private router: Router, 
                private tutorRepository: TutorRepository, 
                private route: ActivatedRoute){}

    ngOnInit() {
        var onLoad = (data) => {
            this.tutor = data;
        };

        this.route.params.subscribe(params => {
            if(params['id'] !== undefined) {
                this.tutorRepository.getById(+params['id'])
                    .then(onLoad);
            } 
            else 
				this.tutor = new Tutor();
        });
    }
    


    save() {
        this.tutorRepository.update(this.tutor);
        this.router.navigateByUrl('/tutor/viewProfile');

        // if(this.tutor.id)
        //     this.tutorRepository.update(this.tutor);
        // else 
        //     this.tutorRepository.add(this.tutor);
        // this.router.navigateByUrl('/');           
    }

}