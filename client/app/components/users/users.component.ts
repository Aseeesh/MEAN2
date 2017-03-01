 import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user";
import { Router } from '@angular/router';

@Component({
    selector: 'my-useres',
    templateUrl: './app/components/users/users.component.html'
})

export class UsersComponent implements OnInit {

    useres: User[];
    selecteduser: User;
    error: any;

    constructor(
        private router: Router,
        private userService: UserService) { }
    getuseres() {
        this.userService.getUsers().then(useres =>{this.useres = useres} );
        
    }
    ngOnInit() {
        this.getuseres();
    }
    onSelect(user: User) { this.selecteduser = user; }

    logout() {
        this.router.navigate(['/login']);
    }

  

    deleteuser(user: User, event: any) {
        event.stopPropagation();
        this.userService
            .delete(user)
            .then(res => {
                this.useres = this.useres.filter(h => h !== user);
                if (this.selecteduser === user) { this.selecteduser = null; }
            })
            .catch(error => this.error = error);
    }
}
