import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
    selector: 'app-list-messages',
    templateUrl: './list-messages.component.html',
    styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

    messages: Observable<Message[]>;

    constructor(private messageService: MessageService) { }

    async ngOnInit() {
        await this.messageService.get().subscribe(data => {
            console.log("data::", data)
            this.messages = data
        });
    }

}
