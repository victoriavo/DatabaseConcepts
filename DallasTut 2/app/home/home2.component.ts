import { Component } from '@angular/core';
import { UserRepository } from "../users/api/user-repository";
import { Router } from "@angular/router";
import { User } from "../users/api/user";

// import { User } from '../users/api/user';
// import { UserRepository } from "../users/api/user-repository";

@Component({
    moduleId: module.id,
    templateUrl: 'home2.component.html',
    styleUrls: ['home.component.css'],
})

export class Home2Component {
    currentUser: User;
    // users: User[] = [];

    constructor(private userRepository: UserRepository, private router: Router) {
       
    }

    logout(){
        this.userRepository.logout()
            .subscribe(x => console.log(x));
        this.router.navigateByUrl('/login');
    }
}