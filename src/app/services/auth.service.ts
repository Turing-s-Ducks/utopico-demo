import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuario.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = '' ;
  private apikey = '';

  userToken: string;

  // Crear nuevo usuario
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

  // Login
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]

  constructor( private http: HttpClient ) {
    this.leerToken();
    this.url = environment.apiUrlFirebase;
  }

  logout() {
    localStorage.removeItem('token');
  }

  login( usuario: UsuarioModel ) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }/verifyPassword?key=${ this.apikey }`,
      authData
    );
  }

  nuevoUsuario( usuario: UsuarioModel ) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    };
    return this.http.post(
      `${ this.url }/signupNewUser?key=${ this.apikey }`,
      authData
    );
  }

  private guardarToken( idToken: string ) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);
    let hoy = new Date();
    hoy.setSeconds( 3600 );
    localStorage.setItem('expira', hoy.getTime().toString() );
  }

  leerToken() {
    if ( localStorage.getItem('token') ) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
    return this.userToken;
  }


  estaAutenticado(): boolean {
    if ( this.userToken.length < 2 ) {
      return false;
    }
    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);
    if ( expiraDate > new Date() ) {
      return true;
    } else {
      return false;
    }
  }
}
