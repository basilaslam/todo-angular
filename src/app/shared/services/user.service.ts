import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { User, UserApiResponse } from '../models/user.interface';

@Injectable({
  providedIn: 'any'
})
export class UserService {
 private URI = `${environment.AUTH_URI}`

  constructor(private _http: HttpClient) { }


  getUser(): Observable<User>{
    return this._http.get<User>(`${this.URI}/me`)
  }
}
