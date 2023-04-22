
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppMessageService {
  messages: string[] = [];

  addMessage(message: string){
    this.messages.push(message);
  }
  clear(){
    this.messages = [];
  }
  constructor() { }
}