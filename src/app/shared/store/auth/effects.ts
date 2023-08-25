import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { of } from "rxjs";

import * as UserActions from "./action";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";

@Injectable()
export class UserEffects {

  constructor(private _actions$: Actions, private _userService: UserService, private _router: Router) {
    console.log('hi');
  }

  loadUserData$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(UserActions.getUser),
      mergeMap(() =>
        this._userService.getUser().pipe(
          map((response) => UserActions.setUserSuccess({ user: response.data.user })),
          catchError((error) => {
            if (error) {
              this._router.navigate(['/auth/login']);
            }
            return of();
          })
        )
      )
    );
  });
}
