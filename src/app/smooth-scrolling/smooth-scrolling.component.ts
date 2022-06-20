import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smooth-scrolling',
  templateUrl: './smooth-scrolling.component.html',
  styleUrls: ['./smooth-scrolling.component.scss']
})
export class SmoothScrollingComponent implements OnInit {

  constructor() { }

  scrollToItem(element: Element): void {
    console.log(element);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    
  }

  ngOnInit(): void {
  }

}
