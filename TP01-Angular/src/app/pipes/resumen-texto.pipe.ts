import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumenTexto',
  standalone: true
})
export class ResumenTextoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string{
    return value.length > 15 ? value.substring(0, 15) + "***" : value;
  }

}
