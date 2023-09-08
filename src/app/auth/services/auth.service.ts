import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, tap, of, map, catchError } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { enviroments } from 'src/environments/environments';



@Injectable({providedIn: 'root'})
export class AuthService {

  private baseUrl = enviroments.baseURL;
  private user?: User;

  constructor(private http: HttpClient) { }

  get currentUser():User|undefined {
    if ( !this.user ) return undefined;
    return structuredClone( this.user );
  }

  login( email: string, password: string ):Observable<User> {

    return this.http.post<User>(`${ this.baseUrl }/services/auth/signin`,{username:'prueba.pass.gmail.com',password:'pruebaSeleccion'})
      .pipe(
        tap( user => console.log(user)),

        tap( user => this.user = user ),
        tap( user => localStorage.setItem('token', 'aASDgjhasda.asdasd.aadsf123k' )),
      );
  }

  checkAuthentication(): Observable<boolean> {

    if ( !localStorage.getItem('token') ) return of(false);

    const token = localStorage.getItem('token');

    return this.http.get<User>(`${ this.baseUrl }/services/auth/signin`)
      .pipe(
        tap( user => this.user = user ),
        map( user => !!user ),
        catchError( err => of(false) )
      );

  }


  logout() {
    this.user = undefined;
    localStorage.clear();
  }



}
