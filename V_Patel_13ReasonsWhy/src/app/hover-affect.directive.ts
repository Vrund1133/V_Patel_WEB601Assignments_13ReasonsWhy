
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {

  @Input('appHoverAffect') style: string = '';
  constructor(private hover: ElementRef) { }
  

  @HostListener('mouseenter') onMouseEnter()  {
    if(this.style === 'bold'){
      this.hover.nativeElement.style.fontWeight = this.style;
    } else {
      this.hover.nativeElement.style.textDecoration = 'underline';
      this.hover.nativeElement.style.fontWeight = 'bold';
    }
  }

  @HostListener('mouseout') onMouseLeave()  {
    this.hover.nativeElement.style.textDecoration = 'none';
    this.hover.nativeElement.style.fontWeight = 'normal';
    
}

}