import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToFavService {
  productsInFav = [];
  mySet = new Set();
  constructor() { }

  add(data): void {
    if (!this.mySet.has(data)) {
      this.mySet.add(data);
    } else {
      this.mySet.delete(data);
    }
    this.productsInFav = Array.from(this.mySet);
  }
  getProducts(): any {
    return this.productsInFav;
  }
  onRemove(product): void {
    this.mySet.delete(product);
    this.productsInFav = Array.from(this.mySet);
  }
}
