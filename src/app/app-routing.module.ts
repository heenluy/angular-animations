import { animation } from '@angular/animations';
import { SmoothScrollingComponent } from './smooth-scrolling/smooth-scrolling.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ScrollComponent } from './scroll/scroll.component';
import { TraditionalComponent } from './traditional/traditional.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, title: 'Animations — Home', data: { animation: 'HomePage' }},
  {path: 'scroll', component: ScrollComponent, title: 'Animations — Scroll', data: { animation: 'ScrollPage' }},
  {path: 'smooth-scrolling', component: SmoothScrollingComponent, title: 'Animations — Smooth Scrolling', data: { animation: 'ScrollingPage' }},
  {path: 'basics', component: TraditionalComponent, title: 'Animations — Basics', data: { animation: 'TraditionalPage' }},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
