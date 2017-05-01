import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TutorRepository } from "../../api/tutor-repository.service";
import { Tutor } from "../../api/tutor";


@Component({
  moduleId: module.id,
  selector: 'tutor-profile',
  templateUrl: 'tutor-profile.component.html',
  styleUrls: [ 'tutor-profile.component.css' ],
})

export class TutorProfileComponent {
    tutor : Tutor;
   
    constructor(private route: ActivatedRoute, 
                private router: Router, 
                private tutorRepository: TutorRepository){
                tutorRepository.getById(1)
                    .then(x => this.tutor = x);
	}
    
    // ngOnInit() {
    // var onLoad = (data) => {
    //     this.tutor = data;
    // };

	// this.route.params.subscribe(params => {
	// 		if(params['id'] !== undefined) {
    //             this.tutorRepository.getById(+params['id'])
    //                 .then(onLoad);
	// 		} 
    //   else 
	// 			this.tutor = new Tutor();
	// 	});
	// }
    // ngOnInit(){
    //     this.route.params.subscribe(x=> this.loadTutor(+x['id']));
    // }
    
    // loadTutor(id:number){
    //     if(id){
    //         this.tutor = this.tutorRepository.getById(id);
    //     }else{
    //         this.tutor = new Tutor();
    //     }
    // }


                    	


        // this.tutor = {id: 1, email: "jsmith@gmail.com", imagePath: "../app/images/johny.jpeg", username: "Johny", password: "1234", firstName: "John", lastName:"Smith", 
        //     bio: "I love teaching!", courses: ["English", "Math", "Physics"], grad_year: 2004, high_school: "Highland Park"};
    }



//      save(){
//          if(this.tutor.id){
//             this.tutorRepository.update(this.tutor);
// 		    this.router.navigateByUrl('');
//          }else{
// 		    this.tutorRepository.add(this.tutor);
// 		    this.router.navigateByUrl('');
//          }
// 	}

