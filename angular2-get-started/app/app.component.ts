import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'my-app',
  template: `
  <h1> {{title}} </h1>
  <router-outlet>
  `,
  providers: [StudentService]
})
export class AppComponent {
  title:string = 'Tutor';
}
