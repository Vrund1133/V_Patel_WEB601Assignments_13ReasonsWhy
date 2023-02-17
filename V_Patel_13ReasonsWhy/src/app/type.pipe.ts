import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(reasonswhy:Content[], typeInput?: string): Content[] {
    return  reasonswhy.filter(character =>{
      return !character.type?.length 
      || character.type =="Boy" || character.type =="Girl";

    })
  }

}