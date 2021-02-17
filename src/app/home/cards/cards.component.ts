import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';

import { LoadJSONService } from 'src/app/services/load-json.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})

export class CardsComponent implements OnInit {
  baskets = [];
  slideConfig = {
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  constructor(private loadJsonService: LoadJSONService, private titleService: Title) { }

  ngOnInit(): void {
    this.loadJsonService.loadJson().subscribe(response => {
      this.baskets = response.baskets;
    });
  }
  setTitle(title): void {
    this.titleService.setTitle(title);
  }
}
