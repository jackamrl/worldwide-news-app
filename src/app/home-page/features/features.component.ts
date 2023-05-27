import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent implements OnInit {
  text: string | undefined;
  words: string[] = [
    'le sport',
    'la musique',
    'la politique',
    'la finances',
    'la cryptomonaie',
    'le cinéma',
  ];
  currentIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.changeWord();
  }
  navigateToNews() {
    this.router.navigate(['/news']);
  }

  changeWord(): void {
    const word = this.words[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.words.length;

    this.animateText(word, 0, '');
  }

  animateText(word: string, index: number, currentText: string): void {
    if (index === word.length) {
      this.text = word;
      setTimeout(() => {
        this.changeWord();
      }, 4000);
    } else {
      currentText += word[index];
      this.text = currentText;
      setTimeout(() => {
        this.animateText(word, index + 1, currentText);
      }, 100);
    }
  }
}
