import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { ErrorComponent } from "./error/error.component";
import { ListTodosComponent } from "./list-todos/list-todos.component";
import { LogoutComponent } from "./logout/logout.component";
import { RouteGuardService } from "./service/route-guard.service";
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "welcome/:name",
    component: WelcomeComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "listTodos",
    component: ListTodosComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "logout",
    component: LogoutComponent,
    canActivate: [RouteGuardService]
  },
  {
    path: "listTodos/:id",
    component: TodoComponent,
    canActivate: [RouteGuardService]
  },
  { path: "**", component: ErrorComponent } // always keep '**' at the last as it is as wild card url
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
