import { Component, OnInit } from '@angular/core';
import { LoadJSONService } from '../services/load-json.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AddToCartService } from '../services/add-to-cart.service';
import { AddToFavService } from '../services/add-to-fav.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  search = '';
  products = [];
  foundProducts = [1];
  constructor(
    private loadJsonService: LoadJSONService,
    private addToCartService: AddToCartService,
    private addToFavService: AddToFavService
  ) { }

  ngOnInit(): void {
    this.loadJsonService.loadJson().subscribe(response => {
      this.products = response.products;
    });
  }
  onEnter(e, search): void {
    if (e.code === 'Enter') {
      this.onSubmit(search);
    }
  }
  onSubmit(search): void {
    if (search.trim()) {
      this.foundProducts = this.products.filter(item => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
      $('#search_head').css('height', '15vh');
    }
  }
  addToCart(product, count): void {
    this.addToCartService.add(product, count);
  }
  addToFav(product): void {
    this.addToFavService.add(product);
  }

}
