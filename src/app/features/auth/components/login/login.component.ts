import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { saveToken } from '../utils/auth.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup

  constructor(private _authService: AuthService, private _router: Router) {}
ngOnInit(){
  this.loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      // Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
    ]),
  })
}


onSubmit(){
  if(this.loginForm.valid){
   this._authService.login(this.loginForm.value).subscribe(data => {
    const accessToken = data.token

    saveToken(accessToken)
    this._router.navigate(["/"])
   })
  }
}
}
