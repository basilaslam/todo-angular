import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './interceptors/http-interceptor.interceptor';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/auth/reducer';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/auth/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forRoot({user: userReducer}),
    EffectsModule.forRoot([UserEffects])
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
