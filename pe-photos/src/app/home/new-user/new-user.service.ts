import { INewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  registerNewUser(newUser: INewUser) {
    return this.http.post('http://localhost:3000/user/signup', newUser);
  }
}
