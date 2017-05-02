import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { TutorRepository } from "../users/api/tutor-repository.service";
import { Tutor } from "../users/api/tutor";
// import { AlertService, UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
    styleUrls: ['register.component.css'],
})

export class TutorRegisterComponent {
    alertService: any;
    model: any = {};
    loading = false;
    tutors: Tutor [] = [];


    constructor(
        private router: Router,
        private tutorRepository: TutorRepository,
        private route: ActivatedRoute
       /* private userService: UserService,
        private alertService: AlertService*/) { 
            
        }

    register() {
        this.model = this.tutorRepository.getAll()
            .subscribe(tutors => this.tutors = tutors);
        ;

        // this.tutorRepository.signUp(this.model)
        //     .subscribe(x => console.log(x));

    }
}
















        // if (this.tutorRepository.signUp(this.model))
        //     this.router.navigateByUrl('/home');
        // }

       
        
        // this.route.params.subscribe(
        //         p => {
        //             console.log(p);

        //         }
        //     )
        //     };

    //     this.loading = true;
    //     this.userService.create(this.model)
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
