import { Component } from '@angular/core';
import { AppMessageService } from '../appmessages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './app-messages.component.html',
  styleUrls: ['./app-messages.component.scss']
})
export class MessagesComponent {
  constructor(public AppmessageService: AppMessageService){}
}