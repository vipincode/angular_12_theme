import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  readonly themeAnchor = this.document.getElementById('app-theme');
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.renderer.addClass(this.document.body, 'light-theme');
  }

  setTheme({ source }: MatSelectChange) {
    if (source.value === 'light') {
      this.renderer.setAttribute(this.themeAnchor, 'href', '/light-theme.css');
    } else {
      this.renderer.setAttribute(this.themeAnchor, 'href', '/dark-theme.css');
    }
  }
}
