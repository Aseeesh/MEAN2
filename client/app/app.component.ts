import {Component} from '@angular/core';

@Component({
    selector:'my-app',
    templateUrl: './app/app.html'
})

export class AppComponent {
   private login=false;
   

    title = 'Tour of Heroes';
     constructor( ) {
            if(localStorage.getItem('username')!=null){
                this.login=true;
            }
        }
}