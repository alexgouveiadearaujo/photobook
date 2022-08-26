import { environment } from './../../environments/environment.prod';
import { TokenService } from './../authentication/token.service';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPhoto, IPhotos } from './iphoto';
import { catchError, mapTo } from 'rxjs/operators';

const API = environment.apiURL;
const NOT_MODIFIED = '304';

@Injectable({
  providedIn: 'root',
})
export class PhotographsService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  userList(userName: string): Observable<IPhotos> {
    return this.http.get<IPhotos>(`${API}/${userName}/photos`);
  }

  searchById(id: number): Observable<IPhoto> {
    return this.http.get<IPhoto>(`${API}/photos/${id}`);
  }

  deletePhoto(id: number): Observable<IPhoto> {
    return this.http.delete<IPhoto>(`${API}/photos/${id}`);
  }

  likePhoto(id: number): Observable<boolean> {
    return this.http
      .post(`${API}/photos/${id}/like`, {}, { observe: 'response' })
      .pipe(
        mapTo(true),
        catchError((err) => {
          return err.status === NOT_MODIFIED ? of(false) : throwError(err);
        })
      );
  }

  upload(description: string, allowComment: boolean, file: File) {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComment ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(`${API}/photos/upload`, formData, {
      observe: 'events',
      reportProgress: true
    });
  }
}
