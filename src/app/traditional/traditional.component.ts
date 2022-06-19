import { Component, OnInit } from '@angular/core';
import { myFirstAnimation } from '../reusable';


@Component({
  selector: 'app-traditional',
  animations: [ myFirstAnimation ],
  templateUrl: './traditional.component.html',
  styleUrls: ['./traditional.component.scss']
})
export class TraditionalComponent implements OnInit {

  isOpen: boolean = true;

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  // colorStyle(): string {
  //   return this.isOpen ? 'orange' : 'black';
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
