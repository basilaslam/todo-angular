import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserApiResponse } from 'src/app/shared/models/user.interface';
import { environment } from 'src/environments/environment.development';
import { LoginInput, SignUpInput } from '../models/auth.interface';

@Injectable({
  providedIn: 'any'
})
export class AuthService {
  private URI = `${environment.AUTH_URI}` as const
  constructor(private _http: HttpClient) { }



  login(userData:LoginInput): Observable<UserApiResponse>{
    return this._http.post<UserApiResponse>(`${this.URI}/login`,userData)
  }

  signUp(userData:SignUpInput): Observable<UserApiResponse>{
    userData.role = 'USER'
    console.log(userData)
    return this._http.post<UserApiResponse>(`${this.URI}/signup`,userData)
  }
}
