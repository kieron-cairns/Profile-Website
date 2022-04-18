import { Directive, ElementRef, HostListener } from '@angular/core';
import { MyGlobals } from 'src/app/MyGlobals';

@Directive({
  selector: '[scrolledToExp4Para]',
  exportAs: 'scrolledToExp4Para',
})
export class scrolledToExp4Para {
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
      console.log("PARA4 REACHED")
      this.globals.isE4P = true;
    }



    // set `true` when scrolling has passed current element height
    this.passed = scrollPosition >= (elementPosition + elementHeight);
  }
}
