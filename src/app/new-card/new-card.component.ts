import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-card',
  templateUrl: './new-card.component.html',
  styleUrls: ['./new-card.component.scss'],
})
export class NewCardComponent implements OnInit {
  @Input() new: any;
  showModal = false;

  constructor() {}

  ngOnInit(): void {}

  formatDateTime(dateTime: string): string {
    const options = {
      year: 'numeric' as const,
      month: 'long' as const,
      day: 'numeric' as const,
      hour: 'numeric' as const,
      minute: 'numeric' as const,
      second: 'numeric' as const,
      timeZone: 'UTC',
    };
    const formattedDateTime = new Date(dateTime).toLocaleString(
      'en-US',
      options
    );
    return formattedDateTime;
  }
  toggleModal() {
    this.showModal = !this.showModal;
  }
}
