import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRepository } from "../../api/user-repository";
import { User } from "../../api/user";

@Component({
  moduleId: module.id,
  selector: 'tutor-profile',
  templateUrl: 'tutor-profile.component.html',
  styleUrls: [ 'tutor-profile.component.css' ],
})

export class TutorProfileComponent {
    tutor : User;
   
    constructor(private route: ActivatedRoute, 
                private router: Router, 
                private userRepository: UserRepository){

        this.tutor = {id: 1, email: "jsmith@gmail.com", imagePath: "/johny.jpeg", username: "Johny", password: "1234", firstName: "John", lastName:"Smith", 
            bio: "I love teaching!", courses: ["English", "Math", "Physics"], grad_year: 2004, high_school: "Highland Park"};
    }

    // ngOnInit(){
    //     this.route.params.subscribe(x=> this.loadTutor(+x['id']));
    // }
    
//     loadTutor(id:number){
//         if(id){
//            this.tutor = this.userRepository.get(id);
//         }else{
//             this.tutor = new Tutor();
//         }
//     }

//      save(){
//          if(this.tutor.id){
//             this.tutorRepository.update(this.tutor);
// 		    this.router.navigateByUrl('');
//          }else{
// 		    this.tutorRepository.add(this.tutor);
// 		    this.router.navigateByUrl('');
//          }
// 	}
}
