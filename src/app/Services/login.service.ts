import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseURL = "localhost:8080/token";

  constructor(private http: HttpClient) { }

  // calling the server to generate the token
  generateToken(credentials: { userName: string, password: string }) {
    // token generate
    return this.http.post("http://localhost:8080/token", credentials);
  }

  // for login user
  loginUser(token) {
    localStorage.setItem("token", token)
    return true;
  }

  // Check user logged in or not
  isLoggedIn() {
    let token = localStorage.getItem("token");
    if (token == undefined || token === '' || token == null) {
      return false
    } else {
      return true
    }
  }

  // When user logged out remove the token

  logout() {
    localStorage.removeItem('token');
    return true;
  }

  // get token from backend server
  getToken() {
    return localStorage.getItem("token");
  }

}
