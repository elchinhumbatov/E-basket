import { Component, OnInit } from '@angular/core';
import { LoadJSONService } from '../services/load-json.service';
import { SendEventService } from '../services/send-event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public loadjson: LoadJSONService, private sendEventService: SendEventService) { }

  ngOnInit(): void {
  }
  // tslint:disable: typedef
  showCatalog() {
    $('.catalog').css('left', '0');
    $('.subCatalog').css('left', '0');
    $('.overlay').css('display', 'block');
    $('body').css('overflow', 'hidden');
    $('.catalog').css('left', '0');
    // this.sendEventService.sendEvent();
  }
}
