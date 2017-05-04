import { Component } from '@angular/core';
import { UserRepository } from "../users/api/user-repository";
import { Router } from "@angular/router";
import { User } from "../users/api/user";

// import { User } from '../users/api/user';
// import { UserRepository } from "../users/api/user-repository";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})

export class HomeComponent {
    currentUser: User;
    // users: User[] = [];

    constructor(private userRepository: UserRepository, private router: Router) {
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    logout(){
        this.userRepository.logout()
            .subscribe(x => console.log(x));
        this.router.navigateByUrl('/login');
    }

    // ngOnInit() {
    //     // this.loadAllUsers();
    // }

    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }

    // private loadAllUsers() {
    //     this.userService.getAll().subscribe(users => { this.users = users; });
    // }
}



