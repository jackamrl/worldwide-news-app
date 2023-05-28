import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/service/news.service';
import { New } from '../shared/model/new';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  curentTopHeadLineNews: New[] = [];
  curentTopHeadLineNewsSize: number | undefined;

  isLoading: boolean = true;
  trialUseEnd: boolean = false;

  constructor(private newsService: NewsService, private title: Title) {}

  ngOnInit(): void {
    this.getAllNews();
    this.title.setTitle('Les annonces - Worldwide News');
  }
  getAllNews() {
    this.newsService.getCurentTopHeadLineNews().subscribe({
      next: (data) => {
        this.curentTopHeadLineNews = data.articles;
        this.curentTopHeadLineNewsSize = data.total_hits;
        this.isLoading = false;
      },

      error: (err) => {
        console.log(err);
        this.isLoading = false;
        this.trialUseEnd = true;
        // setTimeout(() => {
        // }, 2000);
      },
    });
  }
}
