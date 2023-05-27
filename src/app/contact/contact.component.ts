import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sendEmail(
    email: string,
    name: string,
    theSubject: string,
    message: string
  ): void {
    const recipient = 'contact@jackdev.me';
    const subject = 'Nouvel abonnement WorldWideNews';
    const body = `Nom : ${name}\nAdresse Adresse e-mail : ${email}\n  Sujet : ${theSubject}\n Message : ${message}`;
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  }
}
