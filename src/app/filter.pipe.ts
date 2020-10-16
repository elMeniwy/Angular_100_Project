import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], cariteria: string): any {
    if(cariteria === 'all'){return items}else{
        items.filter(item=>{
        return item.category === cariteria;
      })
    }


    return null;
  }

}
