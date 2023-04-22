
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ReasonswhyService } from '../reasonswhy.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss'],
})
export class ContentListComponent implements OnInit {
  public reasonswhy: Content[] = [];
  public inputValue: String = '';
  public Search: boolean | null = null;
  public CharacterIdSearchID: number = 999;
  public IDsearch!: number;
  public searchResults: any[] = [];
  
  defaultimg: string = "https://resizing.flixster.com/qxCTpAWvvb6Y8cPJEFq_hafm5zc=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI5NTc2Ni53ZWJw";

  constructor(private ReasonswhyService: ReasonswhyService) {
  }

  ngOnInit(): void {
    this.ReasonswhyService.getContent().subscribe(character => this.reasonswhy = character);
  }

  searchId(id: number) {
  const character = this.reasonswhy.find(character => character.id === id);
  if (character) {
    console.log('Character found:', character);
    this.searchResults.push(character);

  } else {
    console.log('Character not found');
  }
}

  showCharacterInfo(id: any, title: String) {
    console.log({ id, title });
  }
}