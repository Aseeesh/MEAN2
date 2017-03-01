 
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {User} from "../models/user";

@Injectable()
export class UserService {
  private loggedIn = false;  private userDetail: any = {};
    private UsersUrl = 'api/users';  // URL to web api
 private loginPath = 'http://127.0.0.1:3000/';
    constructor(private http: Http) { }


   login(user: User): Promise<any> {
     //   return this.post(User);
              let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post("api/login", JSON.stringify(user), {headers:headers})
            .toPromise()
            .then((response) => {
                // console.log(response.json().result[0].username);   
                //   console.log(response.json().token);
                return  response.json();
            })
            
            .catch(this.handleError);
    }
 
    getUsers(): Promise<User[]> {
        return this.http.get(this.UsersUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getUser(id: string) {
        return this.http.get(this.UsersUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(User: User): Promise<User>  {
        if (User._id) {
            return this.put(User);
        }
        return this.post(User);
    }

    private post(User: User): Promise<User> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.UsersUrl, JSON.stringify(User), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(User: User) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.UsersUrl}/${User._id}`;

        return this.http
            .put(url, JSON.stringify(User), {headers: headers})
            .toPromise()
            .then(() => User)
            .catch(this.handleError);
    }

    delete(User: User) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.UsersUrl}/${User._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}