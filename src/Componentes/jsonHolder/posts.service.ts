import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

@Injectable({ providedIn: 'root' })
export class PostsService {
  private base = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  list(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.base}/posts`);
  }

  create(data: Omit<Post, 'id'>): Observable<Post> {
    return this.http.post<Post>(`${this.base}/posts`, data);
  }

  update(id: number, data: Omit<Post, 'id'>): Observable<Post> {
    return this.http.put<Post>(`${this.base}/posts/${id}`, data);
  }

  remove(id: number): Observable<unknown> {
    return this.http.delete(`${this.base}/posts/${id}`);
  }
}
