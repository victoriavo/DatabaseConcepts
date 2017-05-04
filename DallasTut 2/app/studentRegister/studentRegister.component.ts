import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from "../services/alert.service";
import { StudentRepository } from "../users/api/student-repository.service";

// import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'],
})

export class StudentRegisterComponent {
    student: any = {};
    loading = false;

    constructor(
        private router: Router,
        private studentRepository: StudentRepository,
        private alertService: AlertService) { }

        register(){
            this.studentRepository.signUp(this.student)
            this.router.navigateByUrl('/student/newProfile');
        }

    // register() {
    //     this.loading = true;
    //     this.studentRepository.create(this.model)
    //         .subscribe(
    //             data => {
    //                 this.alertService.success('Registration successful', true);
    //                 this.router.navigate(['/login']);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
    // }
}

