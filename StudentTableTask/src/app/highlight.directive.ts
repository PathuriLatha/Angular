import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;

  constructor(private elementRef: ElementRef) {
   // elementRef.nativeElement.style.backgroundColor = 'pink';
  }

  @HostListener('mouseenter') onMouseEnter() {
     // this.highlight('yellow');
       this.highlight(this.highlightColor || 'red');
   }

   @HostListener('mouseleave') onMouseLeave() {
     // this.highlight('blue');
         this.highlight(null);
   }

   private highlight(color: string) {
     this.elementRef.nativeElement.style.backgroundColor = color;
   }
}

