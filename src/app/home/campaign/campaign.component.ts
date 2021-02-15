import { Component, OnInit } from '@angular/core';
import { LoadJSONService } from 'src/app/services/load-json.service';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {
  // tslint:disable: deprecation
  // tslint:disable: typedef
  slider = [];
  timer;
  n = 0;
  x1 = 0;
  x2 = 0;
  constructor(private loadJsonService: LoadJSONService) { }

  ngOnInit(): void {
    this.loadSlider();
  }
  loadSlider(){
    this.loadJsonService.loadJson().subscribe(response => {
      this.slider = response.slider;
      this.start();
      for (let i = 1; i <= this.slider.length; i++) {
        $('.s-dots').append('<div id = "d' + i + '"></div>');
      }
      $('.s-dots>div').css({
        width: '15px',
        height: '15px',
        margin: '0 5px 0 0',
        'border-radius': '50%',
        border: '3px solid #999',
        'background-color': '#999',
        cursor: 'pointer'
      });
      $('.s-dots>div:first-child').css('background-color', '#fff');
      this.dotsNav();
    });
  }
  start() {
    this.stop();
    this.show();
    this.timer = setInterval(() => { this.n++; this.show(); }, 5000);
  }
  stop() { clearInterval(this.timer); }
  show() {
    if (this.n === this.slider.length) { this.n = 0; }
    if (this.n < 0) { this.n = this.slider.length - 1; }
    $('.myslide').css({'background-size': '0px 0px'});
    $('.myslide').css({'background-image': 'url("./assets/img/' + this.slider[this.n].image + '")', 'background-size': 'cover'});
    $('.s-title-h').html(this.slider[this.n].text.h1);
    $('.s-title-b').html(this.slider[this.n].text.p);
    $('.s-title a').attr('href', this.slider[this.n].url);
    $('.s-dots>div').css('background-color', '#999');
    $('.s-dots>div').eq(this.n).css('background-color', '#fff');
  }
  toRight(){
    this.n++;
    this.start();
  }
  toLeft(){
    this.n--;
    this.start();
  }
  mDown(event) {
    this.x1 = event.clientX;
  }
  mUp(event) {
    this.x2 = event.clientX;
    if ((this.x2 - this.x1) >= 60 ) { this.toLeft(); }
    else if ((this.x1 - this.x2) >= 60) { this.toRight(); }
  }
  tchStart(event) {
    this.x1 = event.touches[0].clientX;
  }
  tchEnd(event) {
    this.x2 = event.changedTouches[0].clientX;
    if ((this.x2 - this.x1) >= 100) { this.toLeft(); }
    else if ((this.x1 - this.x2) >= 100) { this.toRight(); }
  }
  dotsNav() {
    $('.s-dots>div').on('click', event => {
      this.n = Number(event.target.id.slice(1)) - 1;
      this.start();
    });
  }
}
