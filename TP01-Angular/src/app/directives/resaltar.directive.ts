import { Directive, ElementRef, HostListener, Renderer2  } from '@angular/core'; //importo elemento del decorador para los stilos.

@Directive({
  selector: '[appResaltar]',
  standalone: true
})
export class ResaltarDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  //Decorador para Evento cuando el mause pase por encima.
  @HostListener('mouseenter') onMouseEnter() { 
    this.cambiarEstilo('lightgrey'); // color de fonod
  }

  // Decorador para el Evento cuando el mouse deja el dispotivio
  @HostListener('mouseleave') onMouseLeave() {
    this.cambiarEstilo(''); // Vuelve al fondo original
  }

  //Función para el estilo con el mouse.
  private cambiarEstilo(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

}
