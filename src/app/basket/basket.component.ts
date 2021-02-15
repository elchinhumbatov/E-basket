import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(private route1: ActivatedRoute) { }

  ngOnInit(): void {
    this.route1.params.subscribe(param => {
      console.log(param.idx);
    });
  }

}
