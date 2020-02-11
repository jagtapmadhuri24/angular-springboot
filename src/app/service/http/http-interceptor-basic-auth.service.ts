import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";
import { BasicAuthenticationService } from "../basic-authentication.service";

@Injectable({
  providedIn: "root"
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  constructor(private basicAuthService: BasicAuthenticationService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = "user";
    // let password = "pwd";
    // let basicAuthHeaderStr = "Basic " + window.btoa(username + ":" + password);
    let basicAuthHeaderStr = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();
    if (username && basicAuthHeaderStr) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthHeaderStr
        }
      });
    }

    return next.handle(request);
  }
}

//CSRF: cross sight request forgery
//how "Authorization" check happens: when we add Authorization, a pre-flight request(OPTIONS) is sent to check whether user have the right permissions.
