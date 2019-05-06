import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, empty, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  url: string = environment.url + "api/socket";

  constructor(private http: HttpClient) { }

  post(data: Message) {
    return this.http.post(this.url, data)
      .pipe(
        map((data: Message) => { return data; })
      );

  }
}
