import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { saveToken } from '../utils/auth.util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm!: FormGroup
  passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
  isNotConfirm = false
  constructor(private _authService: AuthService, private _router: Router) {}
ngOnInit(){
  this.signupForm = new FormGroup({
    username : new FormControl('',[Validators.required, Validators.min(3)]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      // Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/),
    ]),
  })
}


onSubmit(){
  if(this.signupForm.valid){
    this._authService.signUp(this.signupForm.value).subscribe(data => {
      const accessToken  = data.token
        saveToken(accessToken)
        this._router.navigate(["/login"])

    })
  }
}


confirmPassword(event: Event){
  const input = event.target as HTMLInputElement
  const password = this.signupForm.get('password')?.value
  console.log(input.value);
  if(input.value === password){
    input.style.color = 'green'
    this.isNotConfirm = false
  }else{
    input.style.color = 'red'
    this.isNotConfirm = true
  }
}
}
