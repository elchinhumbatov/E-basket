import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CloseCatalogService {

  constructor() { }
  // tslint:disable: typedef
  closeCatalog() {
    $('.catalog').css('left', '-150%');
    $('.subCatalog').css({left: '-150%', 'z-index': '70'});
    $('.overlay').css('display', 'none');
    $('body').css('overflow', 'auto');
  }
}
