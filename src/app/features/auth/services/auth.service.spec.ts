import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SignUpInput } from '../models/auth.interface';


describe("AuthService", ()=>{

  let authService: AuthService

  beforeEach(()=>{
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [AuthService]
    })

    authService = TestBed.inject(AuthService)
  })

  it('AuthService should be created', ()=>{
    expect(authService).toBeTruthy()
  })


  it('should not login user', (done)=>{
    const loginData = {
      email: 'kjhasfjkhsdf@gmail.com',
      password: 'afasdfdgsh'
    }
    authService.login(loginData).subscribe(data => {
     expect(data.success).toBeFalsy()
     done()
    },
    error => {
      expect(error).toBeTruthy();
      done();
    })
  })

  it('should login user', (done)=>{
    const loginData = {
      email: 'basilaslamnp@gmail.com',
      password: 'Basil@123'
    }
    authService.login(loginData).subscribe(data => {
     expect(data.success).toBeTruthy()
     done()
    })
  })
  it('should not create new with existing userData', (done)=>{
    const signUpData: SignUpInput = {
      email: 'basilaslamnp@gmail.com',
      password: 'Basil@123',
      username: 'basilaslam',
      role: 'USER'
    }
    authService.signUp(signUpData).subscribe(data => {
     expect(data.success).toBeFalsy()
     done()
    },
    error => {
      expect(error).toBeTruthy()
      done()
    })
  })


})
