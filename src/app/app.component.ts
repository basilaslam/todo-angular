import { Component, OnInit } from '@angular/core';
import { State } from './shared/models/state.interface';
import { Store, select } from '@ngrx/store';
import * as UserActions from "./shared/store/auth/action";
import { selectUseState } from './shared/store/auth/selector';
import { Observable } from 'rxjs';
import { User } from './shared/models/user.interface';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  user$!: Observable<User>
  constructor(private _store: Store<State>, private _userService:UserService){}

  ngOnInit(): void {
    this._store.dispatch(UserActions.getUser());
    this.user$ = this._store.pipe(select(selectUseState))

    this.user$.subscribe(data => {
      console.log('data', data)
    })
  }
}
