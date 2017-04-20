import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    // RouterModule.forRoot(routes),
    HttpModule
  ],
  declarations: [
    AccountListComponent,
    AccountEditorComponent,
    PhoneEditorComponent,
  ],
  providers: [ UserRepository ]
})

export class AccountsModule { }