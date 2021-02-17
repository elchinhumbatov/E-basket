import { Component, OnInit } from '@angular/core';
import { AddToCartService } from '../services/add-to-cart.service';

export interface Obj {
  arr?: Array<any>;
  count?: Array<any>;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // tslint:disable: prefer-for-of
  counts = [];
  prices = [];
  totalSum = 0;
  obj: Obj = {};
  productsInCart = [];
  constructor(private addToCartService: AddToCartService) { }

  ngOnInit(): void {
    this.obj = this.addToCartService.getProducts();
    this.productsInCart = this.obj.arr;
    this.counts = this.obj.count;
    for (let i = 0; i < this.productsInCart.length; i++) {
      this.prices.push(+this.counts[i] * +this.productsInCart[i].price).toFixed(1);
      this.totalSum += this.prices[i];
    }
    this.totalSum.toFixed(1);
  }
  onInpChange(): void {
    this.prices = [];
    this.totalSum = 0;
    for (let i = 0; i < this.productsInCart.length; i++) {
      this.prices.push(+this.counts[i] * +this.productsInCart[i].price).toFixed(1);
      this.totalSum += this.prices[i];
    }
    this.totalSum.toFixed(1);
  }
  deleteProduct(elem): void {
    const idx = this.productsInCart.findIndex(item => item.key === elem.key);
    this.productsInCart.splice(idx, 1);
    this.addToCartService.onDelete(elem);
    this.counts.splice(idx, 1);
    this.prices.splice(idx, 1);
    this.totalSum = this.prices.reduce((sum, current) => {
      return sum + current;
    }, 0);
  }
}
