import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getUser() {
    let username = 'test'
    let password = 'test'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.get<User[]>('http://localhost:8080/api/users', { headers });
  }


  public deleteUser(user) {
    let username = 'javainuse'
    let password = 'password'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.delete<User>("http://localhost:8080/api/users" + "/" + user.id, { headers });
  }

  public createUser(user) {
    let username = 'javainuse'
    let password = 'password'

    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.httpClient.post<User>("http://localhost:8080/api/users", user, { headers });
  }

}
