import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;
  let el: DebugElement

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignupComponent],
      imports: [HttpClientModule, ReactiveFormsModule, SharedModule]
    });
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('button should be disabled', () =>{
    const btn =  el.query(By.css('#submitBtn'))
     expect(btn.nativeElement.disabled).toBeTruthy()
   })




   it('[Email-Check] - should check if the email is Entered', () => {
    let email = component.signupForm.controls['email']
    expect(email.valid).toBeFalsy()
    expect(email.pristine).toBeTruthy()
    expect(email.errors&&email.errors['required']).toBeTruthy()
    email.setValue('abc')
    expect(email.errors&&email.errors['email']).toBeTruthy()
  })

  it('[Email-Check] should check if the email is valid', ()=>{
    let email = component.signupForm.controls['email']
    email.setValue('basilaslam@gmail.com')
    expect(email.errors).toBeNull()

  })

  it('[Form-Check] - should check form is valid or not if no values Entered', ()=>{
    expect(component.signupForm.valid).toBeFalsy()
  })


it('[Form-Check] - should check form is valid or not when values Entered', ()=>{
  component.signupForm.controls['email'].setValue('basilaslamnp123@gmail.com')
  component.signupForm.controls['password'].setValue('Basil@123')
  component.signupForm.controls['username'].setValue('basilaslamnp')
    expect(component.signupForm.valid).toBeTruthy()
  })

});
