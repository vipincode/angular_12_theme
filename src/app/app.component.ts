import { Component, HostBinding, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @HostBinding('class')
  currentTheme: 'light-theme' | 'dark-theme' = 'dark-theme';

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
    this.currentTheme = 'dark-theme';
    this.overlayContainer.getContainerElement().classList.add('dark-theme');
    this.overlayContainer.getContainerElement().classList.remove('light-theme');
  }

  setTheme({ source }: MatSelectChange) {
    if (source.value === 'light') {
      this.currentTheme = 'light-theme';
      this.overlayContainer
        .getContainerElement()
        .classList.remove('dark-theme');
      this.overlayContainer.getContainerElement().classList.add('light-theme');
    } else {
      this.currentTheme = 'dark-theme';
      this.overlayContainer.getContainerElement().classList.add('dark-theme');
      this.overlayContainer
        .getContainerElement()
        .classList.remove('light-theme');
    }
  }
}
