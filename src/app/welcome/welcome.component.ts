//package com.practice.angular;

//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { WelcomeDataService } from '../service/data/welcome-data.service';

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
  constructor(private route: ActivatedRoute, private service: WelcomeDataService) {

  }

  //SomeInterface's method to override.
  ngOnInit() {
    //this method executes when WelcomeComponent is initialized.
    //console.log(this.message);
    //console.log(this.route.snapshot.params['name']);
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
    this.service.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response)
    );

  }
}
