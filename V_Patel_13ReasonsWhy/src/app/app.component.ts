import { Component } from '@angular/core';
import { ReasonswhyService } from './reasonswhy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'V_Patel_13ReasonsWhy';
  contentId: number = 4;
  SelectedContent: any = {};

  defaultimg: string = "https://resizing.flixster.com/qxCTpAWvvb6Y8cPJEFq_hafm5zc=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI5NTc2Ni53ZWJw";

  constructor(private ReasonswhyService: ReasonswhyService){}

  logId(){
    console.log(`ID: ${this.SelectedContent.id}`);
    console.log(`Title: ${this.SelectedContent.title}`);


  }

  ngOnInit(){
    this.ReasonswhyService.getContentById(this.contentId).subscribe(content => this.SelectedContent = content);
  }

  
  showCharacterInfo(id: any, title: String) {
    console.log({ id, title });
  }

  
}


