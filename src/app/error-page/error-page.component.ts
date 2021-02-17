import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  error = faExclamationTriangle;

  constructor(private titleService: Title) {
    this.titleService.setTitle('404... Error');
  }

  ngOnInit(): void {
  }

}
