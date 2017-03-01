import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { DashboardComponent }   from './components/dashboard/dashboard.component';

import { LoginComponent }      from './components/login/login.component';
import { SignUpComponent }      from './components/signup/signup.component';

import { UsersComponent }      from './components/users/users.component';

import { UserService }  from './services/user.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    SignUpComponent,
    LoginComponent
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
