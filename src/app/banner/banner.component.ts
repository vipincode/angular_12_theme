import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  // Must create `@Input()` to padd message on HTML page.
  @Input()
  message = '';

  // This work when is false in tsconfig.json file
  // "noImplicitReturns": false
  @Input()
  type: 'succes' | 'info' | 'accent' | 'none' = 'none';

  @HostBinding('class')
  get hostClass() {
    if (this.type !== 'none') {
      return `app-banner-${this.type}`;
    } else {
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
