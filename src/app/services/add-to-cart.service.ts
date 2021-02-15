import { Injectable } from '@angular/core';

import { Obj } from '../checkout/checkout.component';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {
  obj: Obj = {
    arr: [],
    count: []
  };
  productsInCart = [];
  mySet = new Set();
  constructor() { }

  // tslint:disable: typedef
  add(data, count) {
    let idx;
    if (!this.mySet.has(data)) {
      this.obj.count.push(count);
      $('.my-alert').html('<p style="color: #3c763d">Məhsul səbətə əlavə olundu!</p>').css('right', 0);
    } else {
      idx = this.obj.arr.findIndex(item => item.key === data.key);
      this.obj.count[idx] = count;
      $('.my-alert').html('<p style="color: #a94442">Səbətdə bu məhsul artiq var!</p>').css('right', 0);
    }
    this.mySet.add(data);
    this.obj.arr = Array.from(this.mySet);
    setTimeout(() => {
      $('.my-alert').css('right', '-100%');
    }, 1500);
  }
  getProducts() {
    return this.obj;
  }
}
