import { Component, HostListener, OnInit } from '@angular/core';
import {
  scrollRightAnimation,
  scrollTopAnimation,
  scrollLaftAnimation
} from './../reusable';


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

  elements!: NodeListOf<HTMLElement>;

  protected getElementInView(el: HTMLElement, scrollOffset: number = 0): boolean {
    const elementTop: number = el.getBoundingClientRect().top;
    const windowHeight: number = ( window.innerHeight || document.documentElement.clientHeight ) - scrollOffset;

    return ( elementTop <= windowHeight );
  }


  protected getElementOutofView(el: HTMLElement): boolean {
    const elementTop = el.getBoundingClientRect().top;

    return (
      elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  protected displayScrollElement(el: HTMLElement): void {
    el.classList.add('scrolled');
  }

  protected hideScrollElement(el: HTMLElement): void {
    el.classList.remove('scrolled');
  }


  protected handleScrollAnimation(): void {
    this.log();    
      this.elements.forEach((el) => {
      if(this.getElementInView(el, 100)) {
        this.displayScrollElement(el);
      
      } else if (this.getElementOutofView(el)) {
        this.hideScrollElement(el);
      }
    });

  }

  public containsClass(el: HTMLElement): string {
    if(el.classList.contains('scrolled') == true) {
      return 'enabled'
    }
    return 'disabled';
  }


  log() { console.log('scrolled') }

  @HostListener('window:scroll') onScroll():void {
    this.handleScrollAnimation();
  }

  constructor() { }

  ngOnInit(): void {
    this.elements = <NodeListOf<HTMLElement>> document.querySelectorAll('.scrollable');
    console.log('elements', this.elements)
  }

}
