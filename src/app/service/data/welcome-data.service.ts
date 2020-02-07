import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorld>('http://localhost:8080/helloWorldBean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string) {
    // let basicAuthHeaderStr = this.createBasicAuthHttpHeader();
    //  let header = new HttpHeaders({
    //    Authorization: basicAuthHeaderStr
    //  });

     return this.http.get<HelloWorld>(
       `http://localhost:8080/helloWorld/pathVariable/${name}`//,{headers: header}
     );
    
  }

  //moved to BasicAuthService.ts
  // createBasicAuthHttpHeader(){
  //   let username='user'
  //   let password= 'pwd'
  //   let basicAuthHeaderStr='Basic '+window.btoa(username+':'+password)
  //   return basicAuthHeaderStr;

  // }
}

export class HelloWorld {
  constructor(public msg: string) {}
}

//CSRF: cross sight request forgery
//how "Authorization" check happens: when we add Authorization, a pre-flight request(OPTIONS) is sent to check whether user have the right permissions.
// Access to XMLHttpRequest at 'http://localhost:8080/helloWorld/pathVariable/madhuri'
// from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.

