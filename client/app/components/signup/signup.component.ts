import {Component, Input,OnInit} from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { contentHeaders } from '../common/headers'; 
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
@Component({ 
    selector: 'signup', 
    templateUrl: './app/components/signup/signup.component.html', 
    styleUrls: ['./app/components/signup/signup.component.css']
})

 
export class SignUpComponent implements OnInit  {
   @Input() user: User;   newUser = false;
     error: any;
  constructor(public router: Router, public http: Http, private userService: UserService) {
  
}
 ngOnInit() {
         
           this.newUser = true;
           this.user = new User();      
    }
    signup() {
        this.userService
            .save(this.user)
            .then(User => {
                this.user = User; // saved User, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    } 

  login(event) {
  //  event.preventDefault();
    this.router.navigate(['login']);
  }
  goBack() {
        window.history.back();
    }
}
