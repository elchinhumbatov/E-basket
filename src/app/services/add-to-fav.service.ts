import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToFavService {
  productsInFav = [];
  mySet = new Set();
  constructor() { }

  // tslint:disable: typedef
  add(data) {
    if (!this.mySet.has(data)) {
      this.mySet.add(data);
    } else {
      this.mySet.delete(data);
    }
    this.productsInFav = Array.from(this.mySet);
  }
  getProducts() {
    return this.productsInFav;
  }
}
