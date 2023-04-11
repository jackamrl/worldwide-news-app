import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isDark!: boolean;

  constructor() {}

  ngOnInit(): void {
    const storedIsDarkMode = localStorage.getItem('isDarkMode');
    if (storedIsDarkMode) {
      this.isDark = JSON.parse(storedIsDarkMode);
    } else {
      // Default to light mode if no preference is stored
      this.isDark = false;
    }
    this.applyTheme();
  }
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
