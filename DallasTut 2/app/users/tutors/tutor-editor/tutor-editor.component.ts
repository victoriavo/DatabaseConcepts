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
  user: any

  constructor(private router: Router,
              private route: ActivatedRoute,
              private tutorRepository: TutorRepository){}
  
  ngOnInit() {
    var onLoad = (data) => {
        this.user = data;
    };

	this.route.params.subscribe(params => {
		if(params['id'] !== undefined) {
            this.tutorRepository.getById(+params['id'])
                .then(onLoad);
		} 
        else 
			this.user = new Tutor();
		});
	}
    
  save() {
      if(this.user.id)
          this.tutorRepository.update(this.user);
      else 
          this.tutorRepository.add(this.user);
      this.router.navigateByUrl('/');           
	}

}