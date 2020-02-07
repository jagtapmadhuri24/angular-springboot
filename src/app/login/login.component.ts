import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  username = "madhuri";
  password = "";
  errorMessage = "Invalid Credentials";
  invalidLogin = false;

  //this "router" is available as a member variable in this class. no need to declare as a local variable like 'username'
  constructor(private router: Router, private hardcodedAuthService: HardcodedAuthenticationService
    , private basicAuthService:BasicAuthenticationService) {

  }

  //Router, done by dependency injection

  handleBasicAuthLogin(){
     console.log('inside handleBasicAuth');
    this.basicAuthService.executeAuthService(this.username,this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome',this.username]);
        this.invalidLogin=false;
      },
      error => {
        console.log(error);
        this.invalidLogin=true;

      }
    )

  }

  handleLogin() {
    //if (this.username === "madhuri" && this.password === "123") {
      if (this.hardcodedAuthService.authenticate(this.username, this.password)) {
        console.log("correct pwd");
        //Redirect to welcome page.
        this.router.navigate(["welcome", this.username]);
        this.invalidLogin = false;
      } else {
        console.log("wrong pwd");
        this.invalidLogin = true;
      }
    console.log(this.username);
    console.log(this.password);
  }

  ngOnInit() {}
}
