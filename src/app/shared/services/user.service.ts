import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { UserApiResponse } from '../models/user.interface';

@Injectable({
  providedIn: 'any'
})
export class UserService {
 private URI = `${environment.URI}/users/current-user`

  constructor(private _http: HttpClient) { }


  getUser(): Observable<UserApiResponse>{
    return this._http.get<UserApiResponse>(this.URI)
  }
}
