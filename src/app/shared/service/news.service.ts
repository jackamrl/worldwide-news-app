import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  curentTopHeadLineNews: string =
    'https://newsapi.org/v2/top-headlines?sortBy=popularity&country=us&apiKey=fef67b1ca95a48fd9b5264dd9e60624a';

  constructor(private http: HttpClient) {}

  public getCurentTopHeadLineNews() {
    return this.http.get<any>(this.curentTopHeadLineNews);
  }
}
