import { TestBed } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
describe('AppRoutingModule', () => {

  let routing: RouterModule;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule]
    });
    routing = TestBed.inject(RouterModule);
  });

  it('should have a route defined for /auth', () => {
    expect(routes).toBeDefined();
    expect(routes.length).toBe(1);
    expect(routes[0].path).toBe('auth');
  });

  xit('auth route should lazy load AuthModule', () => {
    const authRoute = routes[0];
    expect(authRoute.loadChildren).toBeDefined();
    if(authRoute.loadChildren)
      expect(authRoute.loadChildren()).toEqual(import('./features/auth/auth.module').then(m => m.AuthModule));

  });

});
