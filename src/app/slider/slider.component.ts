import { Component, OnInit } from '@angular/core';
import {Slider} from './slider.interface';

@Component({
  selector: 'marketplace-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  images: Slider[] = []
  // images: any;
  constructor() {}

  ngOnInit(): void {
    this.images = [{
      name: 'Temp1',
      path: '../assets/images/slider/image1.jpg'
    }, {
      name: 'Temp2',
      path: '../assets/images/slider/image2.jpg'
    }]

    // this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  }

}
