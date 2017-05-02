import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Tutor } from "../api/tutor";
import { TutorRepository } from "../api/tutor-repository.service";

@Component({
  moduleId: module.id,
  selector: 'courses-editor',
  templateUrl: 'courses-editor.component.html',
  styleUrls: [ 'courses-editor.component.css' ],
})

export class CoursesEditorComponent {
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
        });
    }

    delete(course : string){
      this.tutorRepository.deleteCourse(course)
      this.router.navigateByUrl('/');
    }

    save(){

    }
}