import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { StoriesPage } from './stories.page';

import { StoriesPageRoutingModule } from './stories-routing.module';

import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoriesPageRoutingModule,
    SwiperModule
  ],
  declarations: [StoriesPage]
})
export class StoriesPageModule {}
