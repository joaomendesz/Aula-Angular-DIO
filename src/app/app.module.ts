import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './pages/data-binding/data-binding.component';
import { TodolistComponent } from './pages/todo/todolist/todolist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';
import { TodoItemComponent } from './pages/todo/todo-item/todo-item.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import { PipesExampleComponent } from './pages/pipes-example/pipes-example.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersListComponent,
    UsersFormComponent,
    DataBindingComponent,
    TodolistComponent,
    TodoItemComponent,
    PipesExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
