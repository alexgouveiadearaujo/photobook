import { environment } from './../../../environments/environment.prod';
import { INewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor(private http: HttpClient) {}

  registerNewUser(newUser: INewUser) {
    return this.http.post(`${API}/user/signup`, newUser);
  }

  existingUser(userName: string){
    return this.http.get(`${API}/user/exists/${userName}`)
  }

}
