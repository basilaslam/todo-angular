import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/http-interceptor.interceptor';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
  {
   provide: HTTP_INTERCEPTORS,
   useClass: AuthInterceptorService,
   multi: true
  },
  ]
})
export class CoreModule { }
