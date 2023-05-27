import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.scss'],
})
export class HeroPageComponent implements OnInit {
  constructor(private router: Router) {}
  showModal = false;

  ngOnInit(): void {}

  navigateToNews() {
    this.router.navigate(['/news']);
  }
  toggleTheModal() {
    this.showModal = !this.showModal;
  }

  sendEmail(email: string, name: string): void {
    const recipient = 'contact@jackdev.me';
    const subject = 'Nouvel abonnement WorldWideNews';
    const body = `Nom : ${name}\nAdresse Adresse e-mail : ${email}\nMessage : Salut, je désire recevoir les nouvelles mises à Jour de wordlwide. Merci`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
    this.showModal = !this.showModal;
  }
}
