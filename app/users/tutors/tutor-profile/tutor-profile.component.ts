import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRepository } from "../../api/user-repository";
import { User1 } from "../../api/user";

@Component({
  moduleId: module.id,
  selector: 'tutor-profile',
  templateUrl: 'tutor-profile.component.html',
  styleUrls: [ 'tutor-profile.component.css' ],
  
})

export class TutorProfileComponent {
    tutor : User1;
    title: "Tutor Profile";
   
    constructor(private route: ActivatedRoute, 
                private router: Router, 
                private userRepository: UserRepository){

        this.tutor = {
            id: 1, 
            email: "jsmith@gmail.com", 
            imagePath: "/johny.jpeg", 
            username: "Johny", 
            password: "1234", 
            first_name: "John", 
            last_name:"Smith", 
            bio: "\"I have tutored students in high school and college. I worked with students who had very little background in the subject as well as those who were very interested in the particular subject. I have been able to explain challenging topics to students which allowed them to have higher grades in those subjects.\"", 
            courses: ["English", " Math", " Physics"], 
            grad_year: 2004, 
            high_school: "Highland Park"};
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
