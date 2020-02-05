package com.angular.springboot.helloWorld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {

	
	@GetMapping("/helloWorldBean")
	public HelloWorld method(){
		//throw new RuntimeException("Some Error has happened..!");
		return new HelloWorld("Hello World");
	}
	
	@GetMapping("/helloWorld/pathVariable/{name}")
	public HelloWorld withPathVariable(@PathVariable String name){
		return new HelloWorld("Hello World "+name);
	}
}
