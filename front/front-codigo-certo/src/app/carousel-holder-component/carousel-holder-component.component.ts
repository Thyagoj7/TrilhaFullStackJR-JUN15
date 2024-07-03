import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel-holder-component',
  templateUrl: './carousel-holder-component.component.html',
  styleUrl: './carousel-holder-component.component.css'
})
export class CarouselHolderComponentComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin:10,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
