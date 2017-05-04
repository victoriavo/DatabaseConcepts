import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from "../services/authentication.service";
import { AlertService } from "../services/alert.service";
import { Observable } from "rxjs/Observable";
import { UserRepository } from "../users/api/user-repository";

@Component({
   moduleId: module.id,
   templateUrl: 'login.component.html',
   styleUrls: ['login.component.css'],

})

export class LoginComponent{
   user: any = {};
   loading = false;
   returnUrl: string;

   constructor(
       private route: ActivatedRoute,
       private router: Router,
       private userRepository: UserRepository,
       private authenticationService: AuthenticationService,
       private alertService: AlertService) { }

       login(){
           this.userRepository.login(this.user);

            this.router.navigateByUrl('/home');
       
       }
    //    logout(){
    //        this.userRepository.logout(this.user)
    //             .subscribe(x =>{
    //                 console.log(x);
    //             })
    //    }
    
}
    


    //        ngOnInit() {
    //     // reset login status
    //     this.authenticationService.logout();

    //     // get return url from route parameters or default to '/'
    //     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    // }

    // login() {
    //     this.loading = true;
    //     this.authenticationService.login(this.user.email, this.user.password)
    //         .subscribe(
    //             data => {
    //                 this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });

    //         this.router.navigateByUrl('/home');
    // }



