import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class WelcomeDataService {
  constructor(private http: HttpClient) {}

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorld>('http://localhost:8080/helloWorldBean');
  }

  executeHelloWorldBeanServiceWithPathVariable(name: string) {
    return this.http.get<HelloWorld>(`http://localhost:8080/helloWorld/pathVariable/${name}`);
  }
}

export class HelloWorld {
  constructor(public msg: string) {}
}


