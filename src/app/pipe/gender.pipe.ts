import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {


  transform(value: string, ...args: unknown[]): unknown {
    if(value == "male")
      return "Mr.";
    else 
      return "Mrs."
  }

}
