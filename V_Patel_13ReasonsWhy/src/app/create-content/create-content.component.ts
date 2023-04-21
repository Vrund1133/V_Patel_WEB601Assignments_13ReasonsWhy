import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent {

  valueContainer: any = {}
  @Output() eventAction = new EventEmitter<any>();

  addContent(){
    this.eventAction.emit(this.valueContainer);

    console.log("Fortest");
    console.log("ID:-",this.valueContainer.id);
    console.log("Title:-",this.valueContainer.title);
    console.log("Type:-",this.valueContainer.type);
    console.log("Body:-",this.valueContainer.body);
    console.log("ImgUrl:-:",this.valueContainer.imgURL);
    console.log("Author:-:",this.valueContainer.author);
    console.log("Hashtag:-:",this.valueContainer.hashtag);
    this.valueContainer = {};
  }
}