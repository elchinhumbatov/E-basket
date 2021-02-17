import { Component, OnInit } from '@angular/core';
import { LoadJSONService } from '../services/load-json.service';
import {Title} from '@angular/platform-browser';
import { faSearch, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  constructor(
    public loadjson: LoadJSONService,
    private titleService: Title) { }

  ngOnInit(): void {
  }
  showCatalog(): void {
    $('.catalog').css('left', '0');
    $('.subCatalog').css('left', '0');
    $('.overlay').css('display', 'block');
    $('body').css('overflow', 'hidden');
    $('.catalog').css('left', '0');
  }
  setTitle(title): void {
    this.titleService.setTitle(title);
  }
}
