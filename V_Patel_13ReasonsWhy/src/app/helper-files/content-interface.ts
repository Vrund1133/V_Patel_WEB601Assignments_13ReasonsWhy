import { Optional } from "@angular/core";
export interface Content {
    id: number;
    title : string;
    body? : string;
    author : string;
    imgURL? : string;
    type : string;
    hashtag? : string[];
}