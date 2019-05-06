import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    messages: Message[];
    private baseUrl = 'http://localhost:8080/api/messages';

    constructor(private http: HttpClient) { }

    get(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
    }

    create(message: Message): Observable<Object> {
        console.log(message)
        return this.http.post(`${this.baseUrl}` + `/create`, message);
    }
}
