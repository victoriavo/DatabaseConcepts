import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TutorRepository } from "../../api/tutor-repository.service";
import { Tutor } from "../../api/tutor";
// import { Tutor } from "../../index";

@Component({
  moduleId: module.id,
  selector: 'tutor-editor',
  templateUrl: 'tutor-editor.component.html',
  styleUrls: [ 'tutor-editor.component.css' ],
})

export class TutorEditorComponent {
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
        if(this.tutor.id)
            this.tutorRepository.update(this.tutor);
        else 
            this.tutorRepository.add(this.tutor);
        this.router.navigateByUrl('/');           
    }

}