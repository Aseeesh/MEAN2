import {Component, Input,OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { contentHeaders } from '../common/headers'; 
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";

 
@Component({ 
    selector: 'login',
     templateUrl: './app/components/login/login.component.html', 
    styleUrls: ['./app/components/login/login.component.css'] 
})

export class LoginComponent implements OnInit  {
   @Input() user: User; users: User[];
     error: any;
  constructor(public router: Router, public http: Http, private userService: UserService) {
  
}
 ngOnInit() {
         this.user = new User();localStorage.clear();
    }
   
      login() {
        this.userService
            .login(this.user)
            .then((response) => {
              console.log(response);
              console.log(response.result[0].username);  
                //  console.log(response[1].token);    
              
                 localStorage.setItem('token', response.token);
                  localStorage.setItem('username', response.result[0].username);
                this.router.navigate(['users']);
            }) 
            .catch((error) => {console.log(error); this.error = error}); // TODO: Display error message
    }


  signup(event) {
   // event.preventDefault();
    this.router.navigate(['signup']);
  }

  goBack() {
        window.history.back();
    }
}
