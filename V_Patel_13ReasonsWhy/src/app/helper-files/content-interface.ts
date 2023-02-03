export interface Content {
    id: number;
    title : string;
    body? : string;
    author : string;
    imgURL : string;
    type : string;
    hashtag? : string[];
}