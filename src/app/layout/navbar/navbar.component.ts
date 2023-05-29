import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isDark!: boolean;
  menuHidden = true;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}
  toggleMenu() {
    const menu = this.elementRef.nativeElement.querySelectorAll('.navbar-menu');
    for (let i = 0; i < menu.length; i++) {
      if (this.menuHidden) {
        this.renderer.addClass(menu[i], 'hidden');
      } else {
        this.renderer.removeClass(menu[i], 'hidden');
      }
    }
    this.menuHidden = !this.menuHidden;
  }

  ngOnInit(): void {
    // Burger menus
    // document.addEventListener('DOMContentLoaded', () => {
    //   // open
    //   const burger = document.querySelectorAll('.navbar-burger');
    //   const menu = document.querySelectorAll('.navbar-menu');

    //   if (burger.length && menu.length) {
    //     for (let i = 0; i < burger.length; i++) {
    //       burger[i].addEventListener('click', () => {
    //         for (let j = 0; j < menu.length; j++) {
    //           menu[j].classList.toggle('hidden');
    //         }
    //       });
    //     }
    //   }

    //   // close
    //   const close = document.querySelectorAll('.navbar-close');
    //   const backdrop = document.querySelectorAll('.navbar-backdrop');

    //   if (close.length) {
    //     for (let i = 0; i < close.length; i++) {
    //       close[i].addEventListener('click', () => {
    //         for (let j = 0; j < menu.length; j++) {
    //           menu[j].classList.toggle('hidden');
    //         }
    //       });
    //     }
    //   }

    //   if (backdrop.length) {
    //     for (let i = 0; i < backdrop.length; i++) {
    //       backdrop[i].addEventListener('click', () => {
    //         for (let j = 0; j < menu.length; j++) {
    //           menu[j].classList.toggle('hidden');
    //         }
    //       });
    //     }
    //   }
    // });

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
