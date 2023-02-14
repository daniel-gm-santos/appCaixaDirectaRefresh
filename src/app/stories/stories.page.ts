import { Component, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-home',
  templateUrl: 'stories.page.html',
  styleUrls: ['stories.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class StoriesPage {

  // https://ionicframework.com/docs/angular/slides
  // https://swiperjs.com/swiper-api#navigation
  // https://sbsharma.com/ionic-image-slider-with-example/

  constructor() {}

}

