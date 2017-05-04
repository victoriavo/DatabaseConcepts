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

export class LoginTutComponent{
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
            this.router.navigateByUrl('tutor/home');
       
       }
    //    logout(){
    //        this.userRepository.logout(this.user)
    //             .subscribe(x =>{
    //                 console.log(x);
    //             })
    //    }
    
}





