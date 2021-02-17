import { Component, OnInit } from '@angular/core';
import { CloseCatalogService } from './services/close-catalog.service';
import {Title} from '@angular/platform-browser';
import { faHome, faUser, faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
declare const animElements: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faHome = faHome;
  faUser = faUser;
  faShoppingCart = faShoppingCart;
  faHeart = faHeart;
  constructor(
    public closeCatalogService: CloseCatalogService,
    private titleService: Title) {}
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }
  scroll(): void {
    animElements();
    if (window.pageYOffset > 10) {
      $('nav').css('opacity', '0');
    } else {
      $('nav').css('opacity', '1');
    }
    if (window.pageYOffset > 200) {
      $('.toTop').css('display', 'block');
      $('nav').css({position: 'fixed', opacity: '1'});
    }
    else {
      $('.toTop').css('display', 'none');
      $('nav').css('position', 'absolute');
    }
  }
  toTop(): void { window.scrollTo(0, 0); }
  setTitle(title): void {
    this.titleService.setTitle(title);
  }
}
