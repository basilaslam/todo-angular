import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let el: DebugElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[Email-Check] - should check if the email is Entered', () => {
    let email = component.loginForm.controls['email']
    expect(email.valid).toBeFalsy()
    expect(email.pristine).toBeTruthy()
    expect(email.errors&&email.errors['required']).toBeTruthy()
    email.setValue('abc')
    expect(email.errors&&email.errors['email']).toBeTruthy()
  })

  it('[Email-Check] should check if the email is valid', ()=>{
    let email = component.loginForm.controls['email']
    email.setValue('basilaslam@gmail.com')
    expect(email.errors).toBeNull()

  })

  it('[Form-Check] - should check form is valid or not if no values Entered', ()=>{
    expect(component.loginForm.valid).toBeFalsy()
  })


it('[Form-Check] - should check form is valid or not when values Entered', ()=>{
  component.loginForm.controls['email'].setValue('basilaslamnp@gmail.com')
  component.loginForm.controls['password'].setValue('Basil@123')
    expect(component.loginForm.valid).toBeTruthy()
  })


});
