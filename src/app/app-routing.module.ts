import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';
import { TodolistComponent } from './pages/todo/todolist/todolist.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';

const routes: Routes = [
  {path: '', component: UsersListComponent},
  {path: 'form', component: UsersFormComponent}, // form de criar
  {path: 'form/:id', component: UsersFormComponent}, // form de editar
  {path: 'todo', component: TodolistComponent},
  {path: 'pipes', component: PipesExampleComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
