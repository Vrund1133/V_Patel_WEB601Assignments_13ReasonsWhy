import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { List } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  title = 'V_Patel_13ReasonsWhy';

  Author = 'Vrund Patel';

  first: Content;
  second: Content;
  third: Content;


  listOfContent: List = new List;

  constructor() {
    this.first = {
      id: 0,
      title: 'Clay Jensen',
      body: 'Clay Jason Jensen is a fictional character created by author Jay Asher. He is the protagonist in Thirteen Reasons Why, a novel written for teenagers where a girl, Hannah Baker, commits suicide.',
      author: 'Jay Asher',
      imgURL: 'https://flxt.tmsimg.com/assets/316785_v9_bb.jpg',
      type: 'Main Character',
      hashtag: ['Helmet']
    }

    this.second = {
      id: 1,
      title: 'Jessica Davis',
      body: "She was the second best friend of Hannah Baker before she committed suicide, and is a person on Hannah's tapes. It's later revealed that Jessica was raped by Bryce Walker, and after coming to terms with this, decides to stand up to him, Liberty High, and increase the awareness of rape victims.",
      author: 'Jay Asher',
      imgURL: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQcflB3IqyYLKtkkSMGG-Wa-ks-78otBqwoQ7EM60n-myKNCb7Y8J4Fd9Cl6jZA8yZB_sF9oDZmcit9P44',
      type: 'Girl',
      hashtag: ['Davis']
    }

    this.third = {
      id: 2,
      title: 'Hannah Baker',
      body: 'Hannah Baker (August 28, 2000 - October 9, 2017) was one of the main characters in the first and second seasons of 13 Reasons Why, who the title refers to. She was portrayed by Katherine Langford.',
      author: 'Jay Asher',
      imgURL: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT0YA2zddjuh7mW9lU-pAkRsbVfejkVY-ztcWwQje3YkjNvBt3NiYdg-qnNgzJJhdY_c01y5maiL_Fzte4',
      type: 'Girl',
      hashtag: ['Hannah']
    }

    this.listOfContent.addcontent(this.first);
    this.listOfContent.addcontent(this.second);
    this.listOfContent.addcontent(this.third);
    
  }

}