import { Routes, RouterModule } from '@angular/router';

import { StudentListComponent } from './student-list.component';
import { StudentDetailsComponent } from './student-details.component';

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'students',
    component: StudentListComponent,
  },
  // map '/persons/:id' to person details component
  {
    path: 'students/:id',
    component: StudentDetailsComponent
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/students',
    pathMatch: 'full'
  },
];

export const routing = RouterModule.forRoot(routes);
