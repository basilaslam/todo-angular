import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment.development';
import { User } from '../models/user.interface';
import { map } from 'rxjs';

xdescribe('UserService', () => {
  let service: UserService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService],
    });

    service = TestBed.inject(UserService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });





  it('should get user data with valid access token', (done) => {
    const mockUserResponse: User = {
      _id: "64e717e6395d04d27a4b4c22",
      avatar: {
        url: 'https://via.placeholder.com/200x200.png',
        localPath: '',
        _id: "64e717e6395d04d27a4b4c21"
      },
      username: 'basilaslamnp',
      email: 'basilaslamnp123@gmail.com',
      role: 'USER',
      loginType: 'EMAIL_PASSWORD',
      isEmailVerified: false,
      createdAt: "2023-08-24T08:42:14.628Z",
      updatedAt: "2023-08-25T17:36:55.338Z",
      __v: 0,
  }
    const mockAccessToken = 'mock-access-token';

    spyOn(localStorage, 'getItem').and.returnValue(mockAccessToken);

    service.getUser().pipe(map(data => data.data.user)).subscribe(response => {
      expect(response).toEqual(mockUserResponse);
    });

    const req = httpTestingController.expectOne(`${environment.URI}/users`);
    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe(`Bearer ${mockAccessToken}`);

    req.flush(mockUserResponse);
  });

  it('should handle getting user data without access token', () => {
    spyOn(localStorage, 'getItem').and.returnValue(null);

    service.getUser().subscribe(
      () => fail('Expected error, but got success'),
      error => {
        expect(error).toBeTruthy();
        expect(error.status).toBe(401); // Adjust this according to your error response structure
      }
    );

    const req = httpTestingController.expectOne(`${environment.URI}/users`);
    expect(req.request.method).toBe('GET');

    req.error(new ErrorEvent('Unauthorized'), { status: 401 });
  });
});
