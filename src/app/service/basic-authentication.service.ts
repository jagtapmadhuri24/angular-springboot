import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class BasicAuthenticationService {
  constructor(private http: HttpClient) {}

  executeAuthService(username, password) {
    // Here, username= user : password= pwd
    let basicAuthHeaderStr = "Basic " + window.btoa(username + ":" + password);
    let header = new HttpHeaders({
      Authorization: basicAuthHeaderStr
    });
    return this.http
      .get<AuthenticationBean>("http://localhost:8080/basicAuth", {
        headers: header
      })
      .pipe(
        map(data => {
          sessionStorage.setItem("authenticatedUser", username);
          sessionStorage.setItem("token", basicAuthHeaderStr);
          return data;
        })
      );
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem("authenticatedUser");
  }
  
  getAuthenticatedToken() {
    if (this.getAuthenticatedUser()) {
      return sessionStorage.getItem("token");
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser");
    return !(user == null);
  }
  logout() {
    sessionStorage.removeItem("authenticatedUser");
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
