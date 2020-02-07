import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = "user";
    let password = "pwd";
    let basicAuthHeaderStr = "Basic " + window.btoa(username + ":" + password);

    request = request.clone({
      setHeaders: {
        Authorization: basicAuthHeaderStr
      }
    });
    return next.handle(request);
  }

  constructor() {}
}

//CSRF: cross sight request forgery
//how "Authorization" check happens: when we add Authorization, a pre-flight request(OPTIONS) is sent to check whether user have the right permissions.
