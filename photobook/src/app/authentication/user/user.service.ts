import { Iuser } from './iuser';
import { TokenService } from './../token.service';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<Iuser>({});

  constructor(private tokenService: TokenService) {
    if (this.tokenService.haveToken()) {
      this.decodesJWT();
    }
  }

  private decodesJWT() {
    const token = this.tokenService.returnToken();
    const user = jwt_decode(token) as Iuser;
    this.userSubject.next(user);
  }

  returnUser() {
    return this.userSubject.asObservable();
  }

  saveToken(token: string) {
    this.tokenService.saveToken(token);
    this.decodesJWT();
  }

  logout() {
    this.tokenService.deleteToken();
    this.userSubject.next({});
  }

  isLogged() {
    return this.tokenService.haveToken();
  }
}
