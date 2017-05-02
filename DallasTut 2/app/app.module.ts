import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }  from './app.routing';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { UsersModule } from './users/users.module';
import { StudentRegisterComponent } from './studentRegister/index';
import { TutorRegisterComponent } from './tutorRegister/index';
import { MockApiService } from './mock-api.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AlertService } from "./services/alert.service";
import { AuthenticationService } from "./services/authentication.service";
import { AuthGuard } from "./services/auth.guard";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        UsersModule,
        // InMemoryWebApiModule.forRoot(MockApiService),
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        StudentRegisterComponent,
        TutorRegisterComponent,
    ],
    providers: [
        AuthenticationService,
        AlertService,
        AuthGuard,
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }