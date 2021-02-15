import { Component, OnInit } from '@angular/core';
import { CloseCatalogService } from './services/close-catalog.service';
declare const animElements: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public closeCatalogService: CloseCatalogService) {}
  // tslint:disable: typedef
  // tslint:disable: only-arrow-functions
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }
  scroll() {
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
  toTop(){ window.scrollTo(0, 0); }
}
