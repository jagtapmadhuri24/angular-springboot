import { Component, OnInit } from "@angular/core";
import { TodoDataService } from '../service/data/todo-data.service';



export class Todo{
  constructor(public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date){

  }
}
@Component({
  selector: "app-list-todos",
  templateUrl: "./list-todos.component.html",
  styleUrls: ["./list-todos.component.css"]
})
export class ListTodosComponent implements OnInit {
  
  todos:Todo[]
  // todos = [
  //   new Todo(1,'Learn to dance',false, new Date()),
  //   new  Todo(2,'Learn angular' ,false,new Date()),
  //   new Todo(3, 'Visit India',false,new Date())];
    
 message: string
  constructor(private todoService: TodoDataService) {

  }

  ngOnInit() {
  this.todoService.retrieveAllTodos('madhuri').subscribe(
   response => {this.todos=response;
      console.log(response); 
    });

  }


  deleteTodoById(id){
    this.todoService.deleteTodoById(id,'madhuri').subscribe(
      response => {
        console.log(response)
        this.message=`DELETE of Todo ${id} is SUCCESSFUL`
      }
      
    )

  }
}
