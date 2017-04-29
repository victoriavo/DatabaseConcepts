import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class MockApiService implements InMemoryDbService {

    dataStore = {
        default: {
            tutors: [
                {id: 1, email: "jsmith@gmail.com", imagePath: "/johny.jpeg", username: "johny", password: "1234", firstName: "John", lastName:"Smith", 
                    bio: "I love teaching!", courses: ["English", "Math", "Physics"], grad_year: 2004, high_school: "Highland Park"},

                {id: 2, email: "jdoe@gmail.com", imagePath: "/jane.jpeg", username: "jane", password: "4567", firstName: "Jane", lastName:"Doe", 
                    bio: "I am passionate about helping others!", courses: ["English", "Math", "Physics"], grad_year: 2010, high_school: "ThisSchool High"},

            ],

            students: [
                {id: 1, email: "dwade@gmail.com", imagePath: "/dee.jpeg", username: "dwade", password: "1234", firstName: "Dwyane", lastName:"Wade", 
                    bio: "I need help!", courses: ["English", "Math", "Spanish"], grad_year: 2017, high_school: "Highland Park"},

                {id: 2, email: "scurry@gmail.com", imagePath: "/curry.jpeg", username: "steph", password: "4567", firstName: "Stephen", lastName:"Curry", 
                    bio: "I need a tutor!", courses: ["English", "Math", "Physics"], grad_year: 2010, high_school: "ThisSchool High"},


            ]


        },
        empty: {
            tutors: [],
            students: []
        }
    };

    createDb() {
        return this.dataStore['default'];
    }
}