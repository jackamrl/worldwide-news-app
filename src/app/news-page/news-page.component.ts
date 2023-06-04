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

  selectedCategory: string = '';

  all: string = '';
  techCategory: string = 'tech';
  financeCategory: string = 'finance';
  sportCategory: string = 'sport';
  politicsCategory: string = 'politics';
  musicCategory: string = 'music';

  constructor(private newsService: NewsService, private title: Title) {}

  ngOnInit(): void {
    this.loadAllNews();
    this.title.setTitle('Les annonces - Worldwide News');
  }

  /**
   * This method load all top headlines news
   */
  loadAllNews() {
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
  /**
   * This method load sport news
   */
  loadSportNews() {
    this.newsService.getSportNews().subscribe({
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
  /**
   * This method load music news
   */
  loadMusicNews() {
    this.newsService.getMusicNews().subscribe({
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
  /**
   * This method load finance news
   */
  loadFinanceNews() {
    this.newsService.getFinaceNews().subscribe({
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
  /**
   * This method load politics news
   */
  loadPolitcsNews() {
    this.newsService.getPoliticsNews().subscribe({
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
  /**
   * This method load tech news
   */
  loadtechNews() {
    this.newsService.getTechNews().subscribe({
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
  /**
   * This method load news by categort
   * @param category  - The category of news list which we want to load
   *
   */
  loadNewsByCategory(category: string) {
    switch (category) {
      case 'sport':
        this.loadSportNews();
        break;
      case 'finance':
        this.loadFinanceNews();
        break;
      case 'tech':
        this.loadtechNews();
        break;
      case 'music':
        this.loadMusicNews();
        break;
      case 'politics':
        this.loadPolitcsNews();
        break;
      default:
        this.loadAllNews();
        break;
    }
  }

  /**
   * This method change the current category when we click
   * on a category in category list
   * @param category  - the category selected
   */
  onCategoryChange(category: string) {
    this.selectedCategory = category;
    // console.log(this.selectedCategory);

    if (this.selectedCategory) {
      this.loadNewsByCategory(this.selectedCategory);
    } else if (this.selectedCategory == '') {
      this.loadAllNews();
    }
  }
}
