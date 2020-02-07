package com.angular.springboot.helloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AuthenticationBeanController {

	
	@GetMapping("/basicAuth")
	public AuthenticationBean method(){
		System.out.println("inside basic auth");
		//throw new RuntimeException("Some Error has happened..!");
		return new AuthenticationBean("You are Authenticated.");
	}
	
	@GetMapping("/helloWorld/pathVariable/{name}")
	public AuthenticationBean withPathVariable(@PathVariable String name){
		return new AuthenticationBean("Hello World "+name);
	}
}
