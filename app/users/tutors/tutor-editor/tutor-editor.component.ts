import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserRepository } from "../../api/user-repository";
import { User1 } from "../../api/user";

@Component({
  moduleId: module.id,
  selector: 'tutor-editor',
  templateUrl: 'tutor-editor.component.html',
  styleUrls: [ 'tutor-editor.component.css' ],
})

export class TutorEditorComponent {
  user: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userRepository: UserRepository){}
  
  ngOnInit() {
    // var onLoad = (data) => {
    //     this.user = data;
    // };

		// this.route.params.subscribe(params => {
		// 	if(params['id'] !== undefined) {
    //             this.userRepository.getById(+params['id'])
    //                 .then(onLoad);
		// 	} 
    //   else 
		// 		this.user = new User();
		// });
	}
    
  // save() {
  //     if(this.user.id)
  //         this.userRepository.update(this.user);
  //     else 
  //         this.userRepository.add(this.user);
  //     this.router.navigateByUrl('/');           
	// }

  go(path : string){
      this.router.navigate([path]);
  }

  // returnToList(message){
  //   this.router.navigateByUrl('/');
	// }

}