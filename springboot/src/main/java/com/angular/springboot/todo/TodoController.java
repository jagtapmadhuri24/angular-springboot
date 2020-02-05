package com.angular.springboot.todo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins="http://localhost:4200")
@RestController
public class TodoController {
	
	
	@Autowired
	private TodoHardcodedService service;

	
	@GetMapping("/users/{username}/todos")
	public List<Todo> retrieveTodoList(@PathVariable String username){
		return service.findAll();
	}
	
	@DeleteMapping("users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		
		Todo todo=service.deleteById(id);
		
		if(todo!=null){
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
	
	}
	
	@GetMapping("/users/{username}/todos")
	public Todo updateTodo(@PathVariable long id, @PathVariable String username){
		return service.findById(id);
	}
	
	

}
