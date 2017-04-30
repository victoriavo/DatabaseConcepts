import { Router, ActivatedRoute } from '@angular/router';
import { Component, NgModule } from '@angular/core';


export class AboutUs{
     name: String;
     bio: string;
     imagePath: String;
     
}

@Component({
    moduleId: module.id,
    selector: 'about-us',
    templateUrl: 'about-us.component.html',
    styleUrls: ['about-us.component.css']
})
export class AboutUsComponent {
    title: string
    
    constructor(){
		this.title = "About Dallas Tutors";
	}
    members: AboutUs[] = [
        {name: 'Adrien Ibarra', bio: 'BS Computer Science', imagePath: '/app/images/Adrien.jpg'},
        {name: 'Eva Ruggiero', bio: 'BS Computer Science', imagePath: '/app/images/Eva.jpg'},
        {name: 'Jacob Hillman', bio: 'BS Computer Science', imagePath: '/app/images/Jacob.jpg'},
        {name: 'Marietou Diallo', bio: 'BS Computer Science', imagePath: '/app/images/Yeem.jpg'},
        {name: 'Maya Muralidhar', bio: 'BS Computer Science', imagePath: '/app/images/Maya.jpg'},
        {name: 'Victoria Vo', bio: 'BS Computer Science', imagePath: '/app/images/Victoria.jpg'},
    ]
	
    
}
