import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicePipe'
})
export class SlicePipePipe implements PipeTransform {

  transform(value: string, maxCount=10): unknown {
    return value.substring(0,maxCount);
  }

}
