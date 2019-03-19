import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
    selector: 'create-message',
    templateUrl: './create-message.component.html',
    styleUrls: ['./create-message.component.css']
})
export class CreateMessageComponent implements OnInit {

    message: Message = new Message();
    submitted = false;

    constructor(private messageService: MessageService) { }

    ngOnInit() {
    }

    newCustomer(): void {
        this.submitted = false;
        this.message = new Message();
    }

    save() {
        console.log("saving")
        this.messageService.create(this.message.message);
        this.message = new Message();
    }

    onSubmit() {
        this.submitted = true;
        this.save();
    }
}