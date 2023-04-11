import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDark!: boolean;
  constructor(private renderer: Renderer2) {}

  title = 'worldwide-news-app';

  ngOnInit() {
    const storedIsDarkMode = localStorage.getItem('isDarkMode');
    if (storedIsDarkMode) {
      this.isDark = JSON.parse(storedIsDarkMode);
    } else {
      // Default to light mode if no preference is stored
      this.isDark = false;
    }
    this.applyTheme();
  }

  // toggleDarkMode() {
  //   this.isDark = !this.isDark;
  //   if (this.isDark) {
  //     this.renderer.addClass(document.body, 'dark-mode');
  //     this.renderer.removeClass(document.body, 'light-mode');
  //   } else {
  //     this.renderer.addClass(document.body, 'light-mode');
  //     this.renderer.removeClass(document.body, 'dark-mode');
  //   }
  // }
  toggleDarkMode() {
    this.isDark = !this.isDark;
    localStorage.setItem('isDarkMode', JSON.stringify(this.isDark));
    this.applyTheme();
  }
  applyTheme() {
    const darkClassName = 'dark-mode';
    const lightClassName = 'light-mode';
    const body = document.getElementsByTagName('body')[0];

    if (this.isDark) {
      body.classList.add(darkClassName);
      body.classList.remove(lightClassName);
    } else {
      body.classList.add(lightClassName);
      body.classList.remove(darkClassName);
    }
  }

  isDarkMode() {
    const storedTheme = localStorage.getItem('theme');
    if (this.isDark) {
      return true;
    } else if (!this.isDark) {
      return false;
    } else {
      return false; // Ajouter une instruction de retour pour ce cas
    }
  }
}
