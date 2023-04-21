
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
   styleUrls: ['./content-list.component.scss']
  
})
export class ContentListComponent  {
  defaultImageURL: string = 'https://resizing.flixster.com/qxCTpAWvvb6Y8cPJEFq_hafm5zc=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI5NTc2Ni53ZWJw';

  reasonswhy: Content[];
  titleSearchText:string = '';
  searchResult: boolean | null = null;
  failingMessage: string = '';

  public inputValue: String = '';
  public searchMsg: String = '';

  public Reasonswhy: Content[] = [];
  public IDsearch!: number;
  public searchResults: any[] = [];



    constructor() {
    this.reasonswhy = [{
      id: 0,
      title: 'Clay Jensen',
      body: 'Clay Jason Jensen is a fictional character created by author Jay Asher. He is the protagonist in Thirteen Reasons Why, a novel written for teenagers where a girl, Hannah Baker, commits suicide.',
      author: 'Jay Asher',
      imgURL: 'https://flxt.tmsimg.com/assets/316785_v9_bb.jpg',
      type: 'Boy',
      hashtag: ['Helmet']
    },
    {
      id: 1,
      title: 'Jessica Davis',
      body: "She was the second best friend of Hannah Baker before she committed suicide, and is a person on Hannah's tapes. It's later revealed that Jessica was raped by Bryce Walker, and after coming to terms with this, decides to stand up to him, Liberty High, and increase the awareness of rape victims.",
      author: 'Jay Asher',
      imgURL: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQcflB3IqyYLKtkkSMGG-Wa-ks-78otBqwoQ7EM60n-myKNCb7Y8J4Fd9Cl6jZA8yZB_sF9oDZmcit9P44',
      type: 'Girl',
      hashtag: ['Davis']
    },
    {
      id: 2,
      title: 'Hannah Baker',
      body: 'Hannah Baker (August 28, 2000 - October 9, 2017) was one of the main characters in the first and second seasons of 13 Reasons Why, who the title refers to. She was portrayed by Katherine Langford.',
      author: 'Jay Asher',
      imgURL: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT0YA2zddjuh7mW9lU-pAkRsbVfejkVY-ztcWwQje3YkjNvBt3NiYdg-qnNgzJJhdY_c01y5maiL_Fzte4',
      type: 'Girl',
      hashtag: ['Hannah']
    },
    {
      id: 3,
      title: 'Justin Foley',
      body: 'Justin Foley, a student at Liberty High who comes from an abusive family and is in a relationship with Jessica. He is responsible for setting the events of the series into motion by being the first person to humiliate Hannah after their first date.',
      author: 'Jay Asher',
      imgURL: 'https://www.themoviedb.org/t/p/w500/2fir5bwu0nNB4FiQZYY5J9tWZqC.jpg',
      type: 'Boy',
      hashtag: ['Justin']
    },
    {
      id: 4,
      title: 'Tony Padilla',
      body: "Tony Padilla, Clay's best friend at Liberty High who tries to help him deal with Hannah's death. Before her death, Hannah gives Tony the audio cassettes and holds him responsible for making sure everyone on the cassettes hears them.",
      author: 'Jay Asher',
      imgURL: 'https://m.media-amazon.com/images/M/MV5BOTZiOTc4OWQtYjQ5MC00MmVjLTk5OTYtMDE4MWQ5OWJkYTI3XkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_.jpg',
      type: '',
      hashtag: ['Tony']
    },
    {
      id: 5,
      title: 'Zach Dempsey',
      body: "Zach Dempsey, a kindhearted friend of Justin and Bryce at Liberty High. After Bryce breaks his knee at the homecoming game and causes him to lose his college scholarships, Zach assaults Bryce at the river pier, breaking both his legs and his elbow.",
      author: 'Jay Asher',
      imgURL: 'https://akns-images.eonline.com/eol_images/Entire_Site/2020518/rs_600x600-200618112436-600-Ross-Butler.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top',
      type: 'Boy',
      hashtag: ['Zach']
    },
    {
      id: 6,
      title: 'Bryce Walker',
      body: " Bryce Walker, a student from a rich family and the captain of the football team and pitcher on the baseball team at Liberty High. He was friends with Justin, Zach, and Monty.",
      author: 'Jay Asher',
      imgURL: 'https://media1.popsugar-assets.com/files/thumbor/UdVb0TR9c6UJJnXMJ1_tyKNbN5A/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/07/28/806/n/44701584/0d0f6dbf13e08598_GettyImages-978578768/i/Justin-Prentice-Bryce-Walker.jpg',
      type: '',
      hashtag: ['Bryce']
    }
  ];
}

// Reasonswhy: any;

logIdTitle(card: any){
  console.log(`${card.id}, ${card.title}`);
  console.log(`id:- ${card.id}`);
  console.log(`Title:- ${card.title}`);
}
SearchTitle(){
  console.log(this.searchResult);
  console.log("SearchResultText:-",this.searchResult);
  console.log("SearchText:-",this.titleSearchText);
  this.searchResult = this.reasonswhy.some(content => content.title.toLocaleLowerCase().includes (this.titleSearchText.toLocaleLowerCase()));
}

searchId(id: number) {
  const title = this.reasonswhy.find(title => title.id === id);
  console.log('Title ID For result:', title);
  if (title) {
    console.log('Title found:', title);
    this.searchResults.push(title);

  } else {
    console.log('Title not found');
  }
}

addContent(newInfo: any){
  console.log(this.failingMessage);
  const promise = new Promise((resolve, reject) => {
    this.reasonswhy.push(newInfo);
    this.reasonswhy = [...this.reasonswhy]
    resolve(newInfo.title);
  });

  promise.then(title => {
    console.log(`Characters added successfully, ${title}`);
    this.failingMessage = '';
  }).catch(error => {
    this.failingMessage = "Characters not added";
  });
}


  
  showTitleInfo(id: any, title: String) {
    console.log({ id, title });
  }
}