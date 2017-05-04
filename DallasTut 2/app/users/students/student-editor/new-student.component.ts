import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentRepository } from "../../api/student-repository.service";
import { Student } from "../../api/student";

@Component({
  moduleId: module.id,
  selector: 'new-student',
  templateUrl: 'new-student.component.html',
  styleUrls: [ 'student-editor.component.css' ],
})

export class NewStudentComponent {
  student: Student;

   constructor(private router: Router, 
                private studentRepository: StudentRepository, 
                private route: ActivatedRoute){}

    ngOnInit() {
        var onLoad = (data) => {
            this.student = data;
        };

        this.route.params.subscribe(params => {
            if(params['id'] !== undefined) {
                this.studentRepository.getById(+params['id'])
                    .then(onLoad);
            } 
            else 
				this.student = new Student();
        });
    }
    
    save() {
        this.studentRepository.updateNew(this.student);
        this.router.navigateByUrl('/student/viewProfile');
    }

}