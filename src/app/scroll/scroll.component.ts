import { Component, OnInit } from '@angular/core';
import { scrollTopAnimation, scrollLaftAnimation, scrollRightAnimation} from '../reusable';

@Component({
  selector: 'app-scroll',
  animations: [
    scrollTopAnimation,
    scrollLaftAnimation,
    scrollRightAnimation
  ],
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.scss']
})
export class ScrollComponent implements OnInit {

  getElementsInView(el: HTMLElement, scrollOffset: number = 0): boolean {
    const elementTop: number = el.getBoundingClientRect().top;
    return (
      elementTop <= ( window.innerHeight || document.documentElement.clientHeight ) - scrollOffset
    );
  }

  handleScrollAnimation(el: HTMLElement): string {
    console.log('scroll');
    if(this.getElementsInView(el, 100)) {
      return 'enabled';
    }

    return 'disabled';
  }

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', () => { this.handleScrollAnimation });
  }

}
