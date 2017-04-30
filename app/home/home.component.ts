import { Component} from '@angular/core';

import { User1 } from '../users/api/user';
import { UserRepository } from "../users/api/user-repository";

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
})

export class HomeComponent{
    //User1=tutor, User2=students
    currentUser: User1;
    users: User1[] = [];

    // constructor(private userService: UserRepository) {
    //     this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    // }

    ngOnInit() {
        // this.loadAllUsers();
    }

    // deleteUser(id: number) {
    //     this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    // }

    // private loadAllUsers() {
    //     this.userService.getAll().subscribe(users => { this.users = users; });
    // }
}



