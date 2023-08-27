import { Component, OnInit } from '@angular/core';
import { State } from './shared/models/state.interface';
import { Store } from '@ngrx/store';
import * as UserActions from "../app/core/store/auth/action";

import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _store: Store<State>, private _userService:UserService){}

  ngOnInit(): void {
    this._store.dispatch(UserActions.getUser());
  }
}
