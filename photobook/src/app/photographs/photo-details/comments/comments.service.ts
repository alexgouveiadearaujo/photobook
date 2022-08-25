import { Observable } from 'rxjs';
import { IComment, IComments } from './icomments';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  searchComment(id: number): Observable<IComments> {
    return this.http.get<IComments>(`${API}/photos/${id}/comments`);
  }

  addComment(id: number, commentText: string): Observable<IComment> {
    return this.http.post<IComment>(`${API}/photos/${id}/comments`, {
      commentText,
    });
  }
}
