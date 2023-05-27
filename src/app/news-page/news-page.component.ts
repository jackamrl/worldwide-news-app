import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/service/news.service';
import { New } from '../shared/model/new';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent implements OnInit {
  curentTopHeadLineNews: New[] = [];
  curentTopHeadLineNewsSize: number | undefined;

  isLoading: boolean = true;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getAllNews();
  }
  getAllNews() {
    this.newsService.getCurentTopHeadLineNews().subscribe({
      next: (data) => {
        this.curentTopHeadLineNews = data.articles;
        this.curentTopHeadLineNewsSize = data.totalResults;
        setTimeout(() => {
          this.isLoading = false;
        }, 2000);
        console.log(this.curentTopHeadLineNews);
        console.log(this.curentTopHeadLineNewsSize);
      },

      error: (err) => {
        console.log(err);
        this.isLoading = false;
        // setTimeout(() => {
        // }, 2000);
      },
    });
  }
}
