import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  dark = false;

  constructor() {
    const prefersColor = window.matchMedia('(prefers-color-scheme: dark)');
    this.dark = prefersColor.matches;
    this.updateDarkMode();

    prefersColor.addEventListener(
      'change',
      mediaQuery => {
        this.dark = mediaQuery.matches;
        this.updateDarkMode();
      }
    );
  }

  get page() {
    return {
      title: 'Settings'
    };
  }

  updateDarkMode() {
    document.body.classList.toggle('dark', this.dark);
  }

  ngOnInit() {
    this.updateDarkMode();
  }
}
