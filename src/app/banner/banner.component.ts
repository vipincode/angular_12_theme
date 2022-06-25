import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  // Must create `@Input()` to padd message on HTML page.
  @Input()
  message = '';

  constructor() {}

  ngOnInit(): void {}
}
