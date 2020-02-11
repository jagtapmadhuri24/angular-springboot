import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { API_URL } from "../app.constants";

export const TOKEN = "token";
export const AUTHENTICATED_USER = "authenticatedUser";
@Injectable({
  providedIn: "root"
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  executeJWTAuthService(username, password) {
    return this.http
      .post<any>(`${API_URL}/authenticate`, { username, password })
      .pipe(
        map(data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
          return data;
        })
      );
  }

  executeAuthService(username, password) {
    // Here, username= user : password= pwd
    let basicAuthHeaderStr = "Basic " + window.btoa(username + ":" + password);
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderStr
    });
    return this.http
      .get<AuthenticationBean>(`${API_URL}/basicAuth`, {
        headers: header
      })
      .pipe(
        map(data => {
          sessionStorage.setItem(AUTHENTICATED_USER, username);
          sessionStorage.setItem(TOKEN, basicAuthHeaderStr);
          return data;
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem(TOKEN);
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return !(user == null);
  }
  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }

  /*createBasicAuthHttpHeader() {
    let username = "user";
    let password = "pwd";
    let basicAuthHeaderStr = "Basic " + window.btoa(username + ":" + password);
    return basicAuthHeaderStr;
  } */

  /*authenticate(username, password) {
    if (username === "madhuri" && password === "123") {
      sessionStorage.setItem("authenticatedUser", username);
      return true;
    }
    return false;
  }*/
}

export class AuthenticationBean {
  constructor(public msg: string) {}
}
