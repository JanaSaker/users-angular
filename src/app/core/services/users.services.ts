import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UsersService {
  private baseUrl = 'https://reqres.in/api/users';

  private usersCache = new Map<number, any>();
  private userCache = new Map<number, any>();

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    if (this.usersCache.has(page)) {
      return of(this.usersCache.get(page));
    }

    return this.http.get(`${this.baseUrl}?page=${page}`).pipe(
      tap(response => this.usersCache.set(page, response))
    );
  }

  getUserById(id: number): Observable<any> {
    if (this.userCache.has(id)) {
      return of(this.userCache.get(id));
    }

    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      tap(response => this.userCache.set(id, response))
    );
  }
}
