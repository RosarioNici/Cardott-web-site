import { Component } from '@angular/core';
import {carouselArray} from 'src/app/home/carousel/data.carousel'
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

carouselItems = carouselArray

}
