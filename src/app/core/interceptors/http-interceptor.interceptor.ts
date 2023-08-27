import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()

export class AuthInterceptorService implements HttpInterceptor {
  constructor(private _router: Router) {}
 intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.getAuthToken();

   if (token) {
     // If we have a token, we set it to the header
     request = request.clone({
      setHeaders: { token: token }
     });
  }else{
    this._router.navigate(["/auth/login"])
  }

  return next.handle(request).pipe(
  catchError((err) => {
   if (err instanceof HttpErrorResponse) {
      if (err.status === 401) {
          this._router.navigate(["/auth/login"])
    }
}
  return throwError(err);
	})
   )
  }

  getAuthToken() {
   const Token = localStorage.getItem('accessToken')
   if(Token){
    return Token
   }

   return false
  }
}
