import { Directive, ElementRef, HostListener } from '@angular/core';
import { MyGlobals } from 'src/app/MyGlobals';

@Directive({
  selector: '[scrolledToE2H]',
  exportAs: 'scrolledToE2H',
})
export class ScrolledToE2Header {
  reached = false;
  passed = false;

  constructor(public el: ElementRef, private globals: MyGlobals) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const elementPosition = this.el.nativeElement.offsetTop;
    const elementHeight = this.el.nativeElement.clientHeight;
    const scrollPosition = window.pageYOffset;

    // set `true` when scrolling has reached current element
    this.reached = scrollPosition >= elementPosition;
    if(this.reached)
    {
      console.log("E2 HEADER REACHED")
      this.globals.isE2H = true;
    }



    // set `true` when scrolling has passed current element height
    this.passed = scrollPosition >= (elementPosition + elementHeight);



  }
}
