
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from './helper-files/content-interface';
import { reasonswhy } from './helper-files/contentDb';

import { AppMessageService } from './appmessages.service';

@Injectable({
  providedIn: 'root'
})
export class ReasonswhyService {

  constructor(private AppmessageService: AppMessageService) { }

  getContent(): Observable<Content[]>{
    this.AppmessageService.addMessage("Content array loaded!");
    return of(reasonswhy);
  }

  getContentById(id: number): Observable<any> {
    const content = reasonswhy.find(c => c.id === id);
    this.AppmessageService.addMessage(`Content item at id: ${id}`);
    return of(content);
  }
}