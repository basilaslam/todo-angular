import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { AuthInterceptorService as AuthInterceptor } from './http-interceptor.interceptor';
import { Router } from '@angular/router';

describe('AuthInterceptor', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthInterceptor,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    router = TestBed.inject(Router);

    spyOn(router, 'navigate');
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should redirect when no token', (done) => {
    httpClient.get('/api').subscribe(
      () => fail('should have failed with 401'),
      (error) => {
        expect(error.status).toBe(401);
        expect(router.navigate).toHaveBeenCalledWith(['/auth/login']);
        done();
      }
    );

    const req = httpTestingController.expectOne('/api');

    req.flush('Unauthorized', { status: 401, statusText: 'Unauthorized' });
  });

  it('should add Authorization header with token', () => {
    const token = 'mock-token';
    spyOn(localStorage, 'getItem').and.returnValue(token);

    httpClient.get('/api/data').subscribe();
    const req = httpTestingController.expectOne('/api/data');

    expect(req.request.headers.get('Authorization')).toEqual(`Authorization token ${token}`);
    expect(req.request.method).toBe('GET');

    req.flush({});
  });

})
