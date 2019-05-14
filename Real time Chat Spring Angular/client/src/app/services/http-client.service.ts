import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) {
  }

  getUser() {
    return this.httpClient.get<User[]>(environment.url + 'users');
  }


  public deleteUser(user) {
    return this.httpClient.delete<User>(environment.url + "users" + "/" + user.id);
  }

  public createUser(user) {
    return this.httpClient.post<User>(environment.url + "users", user);
  }

}
