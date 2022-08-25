import { switchMap, take } from 'rxjs/operators';
import { IPhotos } from './../iphoto';
import { UserService } from './../../authentication/user/user.service';
import { PhotographsService } from './../photographs.service';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotoListResolver implements Resolve<IPhotos> {
  constructor(
    private photographsService: PhotographsService,
    private userService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IPhotos> {
    return this.userService.returnUser().pipe(
      switchMap((user) => {
        const userName = user.name ?? '';
        return this.photographsService.userList(userName);
      }),
      take(1)
    );
  }
}
