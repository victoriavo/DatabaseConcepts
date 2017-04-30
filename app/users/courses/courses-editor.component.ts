import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User1 } from "../api/user";
import { UserRepository } from "../api/user-repository";

@Component({
  moduleId: module.id,
  selector: 'courses-editor',
  templateUrl: 'courses-editor.component.html',
  styleUrls: [ 'courses-editor.component.css' ],
})

export class CoursesEditorComponent {
    tutor: User1;

    constructor(
        private router: Router,
        private userRepository: UserRepository) { }
    
    

}