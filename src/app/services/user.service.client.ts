import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';
import {Http, Response, RequestOptions} from '@angular/http';
import {SharedService} from './shared.service';
import {Router} from '@angular/router';

@Injectable()
export class UserService {
  constructor(private http: Http, private sharedService: SharedService, private router: Router) {
  }

  baseUrl = environment.baseUrl;
  options = new RequestOptions();

  loggedIn() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
      .map(
        (res: Response) => {
          const user = res.json();
          if (user !== 0) {
            this.sharedService.user = user; // setting user as global variable using shared service
            return true;
          } else {
            alert('Please login.');
            this.router.navigate(['/login']);
            return false;
          }
        }
      );
  }

  login(username, password) {
    this.options.withCredentials = true;
    const body = {
      username: username,
      password: password
    };
    return this.http.post(this.baseUrl + '/api/login', body, this.options)
      .map(
        (res: Response) => {
          return res.json();
        }
      );
  }

  logout() {
    this.options.withCredentials = true;
    return this.http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
      );
  }

  createUser(username: String, password: String, userType: String) {
    const body = {
      username: username,
      password: password,
      userType: userType
    };

    return this.http.post(this.baseUrl + '/api/createuser', body)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  register(username: String, password: String, userType: String) {
    this.options.withCredentials = true;
    const body = {
      username: username,
      password: password,
      userType: userType
    };

    return this.http.post(this.baseUrl + '/api/register', body, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  findUserByCredential(username, password) {
    const url = this.baseUrl + '/api/user/?username=' + username + '&password=' + password;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findUserById(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  findUserByUsername(username) {
    const url = this.baseUrl + '/api/username/' + username;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }

  updateUser(userId, user) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    });
  }

  deleteUser(userId) {
    const url = this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url).map((response: Response) => {
      return response.json();
    });
  }

  findAllUser() {
    const url = this.baseUrl + '/api/users';
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }
  findUserByUsernames(username) {
    const url = this.baseUrl + '/api/usernames/' + username;
    return this.http.get(url).map((response: Response) => {
      return response.json();
    });
  }
}
