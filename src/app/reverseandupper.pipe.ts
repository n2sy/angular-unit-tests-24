import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseandupper'
})
export class ReverseandupperPipe implements PipeTransform {

  transform(value: string[]): string {
    return value.reverse().join('-').toUpperCase();
  }

}
