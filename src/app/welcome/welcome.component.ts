//package com.practice.angular;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService, HelloWorld } from '../service/data/welcome-data.service';
import { HttpClient, HttpHeaders } from "@angular/common/http";

//@ComponentScan(value="com.practice.angular")
@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})

//public class SpringBootFirstApplication implements SomeInterface{}

//export keyword is to enable the class to use outside the boundary of particuale module. just like "public" in JAVA
export class WelcomeComponent implements OnInit {
  message: String = "Welcome to our awesome application";
  name = "";
  welcomeMsgFromSrv: string;
  welcomeErrMsg: string;
 
  

  //ActivatedRoute is to map the variable from previous page(caller page)
  //SpringBootFirstApplication(){}
  constructor(private route: ActivatedRoute, private service: WelcomeDataService,
    private http:HttpClient) {

  }

  //SomeInterface's method to override.
  ngOnInit() {
    //this method executes when WelcomeComponent is initialized.
    this.name = this.route.snapshot.params["name"];
  }

  getWelcomeMessage(){
   //subscribe() is an asynchronous call.
    this.service.executeHelloWorldBeanService().subscribe(
       response =>this.handleSuccessfulResponse(response),
       error => this.handleErrorMsg(error)
    
      );
 }


  handleSuccessfulResponse(response){
   this.welcomeMsgFromSrv=response.msg;
  }

  handleErrorMsg(error){
    console.log("error: "+error.error.message)
    this.welcomeErrMsg = error.error.message;
  }

  getWelcomeMsgWithPathVariable(){
  let header = new HttpHeaders({
   Authorization: sessionStorage.getItem("token")
 });
   let name=sessionStorage.getItem("authenticatedUser");
   return this.http.get<HelloWorld>(`http://localhost:8080/helloWorld/pathVariable/${name}`, {
        headers: header
      }).subscribe(
        data => {
          this.handleSuccessfulResponse(data);
        }
      )



    // this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
    //   response => {this.handleSuccessfulResponse(response);},
    //   error=>{
    //     this.handleErrorMsg(error);
    //   }
    // );

  }

  

}
