import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCardPipe',
  pure: false,
})
export class FilterCardPipePipe implements PipeTransform {
  transform(value: any[], property?: string, searchString?: string): any {
    if (typeof value !== 'undefined') {
      return value.filter((e) => {
        return (
          e[property].toLowerCase().indexOf(searchString.toLowerCase()) !== -1
        );
      });
    } else {
      return [];
    }
  }
}
