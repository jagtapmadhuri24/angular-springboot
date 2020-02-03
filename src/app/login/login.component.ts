import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
  constructor(private router: Router) {}

  //Router, done by dependency injection

  handleLogin() {
    if (this.username === "madhuri" && this.password === "123") {
      console.log("correct pwd");
      //Redirect to welcome page.
      this.router.navigate(['welcome', this.username]);
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
