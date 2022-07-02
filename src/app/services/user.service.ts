import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = "https://sheet.best/api/sheets/8f452571-6a03-42d1-80e7-c10dbdc0db19"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
      //token aqui caso precise
    })
  }

  constructor(private httpClient: HttpClient) {    }


  // Retorna a lista de usuarios da API
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL)
  }

  //Código que salva o usuario na minha API
  postUser(user: User):Observable<User> {
  return this.httpClient.post<User>(this.apiURL, user, this.httpOptions)
  }

  //Código que exclui o usuario da lista.
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`)
  }
  // Edita usuário
  updateUser(id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpOptions)
  } 
  // Lista de usuários únicos.
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`)
  }
}


