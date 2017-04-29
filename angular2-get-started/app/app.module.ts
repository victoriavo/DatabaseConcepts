import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, RequestOptions, XHRBackend } from '@angular/http';
import { HttpService } from './http.service';
import { routing } from './app.routes';

import { AppComponent }  from './app.component';
import { StudentListComponent } from './student-list.component';
import { StudentDetailsComponent } from './student-details.component';

@NgModule({
  providers: [
     {
      provide: HttpService,
      useFactory: (backend: XHRBackend, options: RequestOptions) => {
        return new HttpService(backend, options);
      },
      deps: [XHRBackend, RequestOptions]
    }
  ],
  imports: [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent, StudentListComponent, StudentDetailsComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }