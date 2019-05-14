import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { environment } from '../../../environments/environment';
import { SocketService } from '../../services/socket.service';
import { ToastrService } from 'ngx-toastr';
import { Message } from '../../models/message';



@Component({
  selector: 'app-socket',
  templateUrl: './socket.component.html',
  styleUrls: ['./socket.component.css']
})
export class SocketComponent implements OnInit {

  private serverUrl = environment.url + 'socket'
  username: string = sessionStorage.getItem('username');
  isLoaded: boolean = false;
  isCustomSocketOpened = false;
  private stompClient;
  private form: FormGroup;
  private userForm: FormGroup;
  messages: Message[] = [];
  constructor(private socketService: SocketService, private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      message: new FormControl(null, [Validators.required])
    })
    this.userForm = new FormGroup({
      fromId: new FormControl(null, [Validators.required]),
      toId: new FormControl(null)
    })
    this.initializeWebSocketConnection();
  }

  sendMessageUsingSocket() {
    if (this.form.valid) {
      let message: Message = { message: this.form.value.message, fromId: this.username, toId: this.userForm.value.toId };
      this.stompClient.send("/socket-subscriber/send/message", {}, JSON.stringify(message));
      this.form.reset();
      this.userForm.reset();
    }
  }

  sendMessageUsingRest() {
    if (this.form.valid) {
      let message: Message = { message: this.form.value.message, fromId: this.username, toId: this.userForm.value.toId };
      this.socketService.post(message).subscribe(res => {
        console.log(res);
      })
    }
  }

  initializeWebSocketConnection() {
    console.log(this.serverUrl);
    let ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    let that = this;
    this.stompClient.connect({}, function (frame) {
      that.isLoaded = true;
      that.openGlobalSocket();
      that.openSocket();
    });
  }

  openGlobalSocket() {
    this.stompClient.subscribe("/socket-publisher", (message) => {
      this.handleResult(message);
    });
  }

  openSocket() {
    if (this.isLoaded) {
      this.isCustomSocketOpened = true;
      this.stompClient.subscribe("/socket-publisher/" + this.username, (message) => {
        this.handleResult(message);
      });
    }
  }

  handleResult(message) {
    if (message.body) {
      let messageResult: Message = JSON.parse(message.body);
      console.log(messageResult);
      this.messages.push(messageResult);
      this.toastr.success("Nuevo mensaje recibido", null, {
        'timeOut': 3000
      });
    }
  }

}
