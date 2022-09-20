import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeComma',
})
export class RemoveCommaPipe implements PipeTransform {
  transform(value: string | null) {
    if (value !== undefined && value !== null) {
      return value.toString().replace(/,/g, '');
    } else {
      return '';
    }
  }
}
