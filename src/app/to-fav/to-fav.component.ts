import { Component, Input, OnInit } from '@angular/core';
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-to-fav',
  templateUrl: './to-fav.component.html',
  styleUrls: ['./to-fav.component.css']
})
export class ToFavComponent implements OnInit {
  faHeart = faHeart;
  faHeartBroken = faHeartBroken;
  @Input() favStatus;
  status = true;
  constructor() { }

  ngOnInit(): void {
    if (this.favStatus !== undefined) {
      this.status = this.favStatus;
    } else { this.status = true; }
  }
}
