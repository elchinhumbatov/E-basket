import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SubcatN } from '../categories/categories.component';
import { AddToCartService } from '../services/add-to-cart.service';
import { AddToFavService } from '../services/add-to-fav.service';
import { LoadJSONService } from '../services/load-json.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productListTitle = '';
  choosenProducts = [];
  choosenProductsList: SubcatN = {};
  constructor(
    private loadJsonService: LoadJSONService,
    private route: ActivatedRoute,
    private addToCartService: AddToCartService,
    private addToFavService: AddToFavService
    ) {}

  ngOnInit(): void {
    this.loadJsonService.loadJson().subscribe(response => {
      this.route.params.subscribe((params) => {
        const idx = Number(params.id.slice(0, 2));
        this.productListTitle = response.cat[idx];
        this.choosenProductsList = response.subcat[idx];
        this.choosenProducts = response.products.filter(item => item.id === params.id);
      });
    });
  }
  // tslint:disable: typedef
  addToCart(product, count) {
    this.addToCartService.add(product, count);
  }
  addToFav(product) {
    this.addToFavService.add(product);
  }
}
