import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'opTransform'
})
export class OpTransformPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    if (value == 1 )
      return 'Buy';
    else
      return 'Sell';
  }

}
