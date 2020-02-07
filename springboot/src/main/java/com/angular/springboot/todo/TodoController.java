package com.angular.springboot.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


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
	
	@GetMapping("/users/{username}/todos/{id}")
	public Todo updateTodo(@PathVariable long id, @PathVariable String username){
		return service.findById(id);
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Todo> updateTodo(@PathVariable long id, @PathVariable String username, @RequestBody Todo todo){
		 Todo updated= service.save(todo);
		 return new ResponseEntity<Todo>(updated,HttpStatus.OK);
	}
	
	
	@PostMapping("/users/{username}/todos")
	public ResponseEntity<Todo> saveTodo( @PathVariable String username, @RequestBody Todo todo){
		 Todo saved= service.save(todo);
		 //Location of created resource
		 URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(saved.getId()).toUri();
		 return  ResponseEntity.created(uri).build();
	}
	

}
