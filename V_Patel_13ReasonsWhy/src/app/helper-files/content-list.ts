import { Content } from "./content-interface";


export class List {


        private _contentArray: Content[];
    
        constructor()
        {
            this._contentArray = [];
        }
    
        get content():Content[]{
            return this._contentArray;
        }
    
        addcontent(Content:any)
        {
            this._contentArray.push(Content);
        }
    
        getme()
        {
            return this._contentArray.length;
        }
    
        
        get(index:number) {
            for(var i = 0; i < this.getme(); i++) {
                if(this._contentArray[i].id === index) {
                return `
                <div id="card" class="card bg-light m-4">
                    <img src="${this._contentArray[index].imgURL}" width="500px" height="600px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <p class="mb-2 text-danger card-title">Title -${this._contentArray[index].title}</p>
                            <p class="mb-2 text-danger card-text">Author - ${this._contentArray[index].author}</p>
                            <p class="mb-2 text-danger card-text">Type - ${this._contentArray[index].type}</p>
                            <p class="mb-2 text-danger card-text">Body - ${this._contentArray[index].body}</p>
                        </div>
                </div>`
                }
            }
            return `<div class="text-center">No data available</div>`;
            }
    
    }