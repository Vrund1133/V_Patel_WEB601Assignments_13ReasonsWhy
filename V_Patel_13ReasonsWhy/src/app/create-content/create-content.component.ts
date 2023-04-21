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


  addContentEvents(){
    this.eventAction.emit(this.valueContainer);
    
    console.log("Fortest");
    console.log("ID:-",this.valueContainer.id);
    console.log("Title:-",this.valueContainer.title);
    console.log("Type:-",this.valueContainer.type);
    console.log("Description:-",this.valueContainer.description);
    console.log("Moviename:-:",this.valueContainer.moviename);
    console.log("ImageUrl:-:",this.valueContainer.imgURL);
    console.log("Actor:-:",this.valueContainer.actor);
    console.log("Rating:-:",this.valueContainer.rating);
    

    this.valueContainer = {};
  }

 
}