import { Component } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { MatchPatternDirective } from './match-pattern.directive';
import { SharedModule } from '../shared.module';
import { FormsModule } from '@angular/forms';

@Component({
  template: `
    <input
    [(ngModel)]="password"
    id="password"
      type="password"
      appMatchPattern
      [pattern]="pattern"
      [password]="password"
    />
  `,
})
class TestHostComponent {
  pattern: RegExp =  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  password: string = 'Test@123';
}

describe('MatchPatternDirective', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let component: TestHostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchPatternDirective, TestHostComponent],
      imports: [SharedModule, FormsModule]
    });

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set color to green for valid pattern', fakeAsync(() => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#password');
    inputElement.value = 'Test@123';
    inputElement.dispatchEvent(new Event('input'));
    tick(); // Simulate asynchronous operations
    fixture.detectChanges();
    expect(inputElement.style.color).toBe('green');
  }));

  it('should set color to red for invalid pattern', fakeAsync(() => {
    const inputElement: HTMLInputElement = fixture.nativeElement.querySelector('#password');
    inputElement.value = 'invalidPassword';
    inputElement.dispatchEvent(new Event('input'));
    tick(); // Simulate asynchronous operations
    fixture.detectChanges();
    expect(inputElement.style.color).toBe('red');
  }));
});
