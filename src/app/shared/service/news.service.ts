import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  // With news.api
  // curentTopHeadLineNews: string =
  //   'https://newsapi.org/v2/top-headlines?sortBy=popularity&country=us&apiKey=fef67b1ca95a48fd9b5264dd9e60624a';

  //with mediastack.com
  curentTopHeadLineNews: string =
    'http://api.mediastack.com/v1/news?access_key=4644369840dff5852009e9e6a171a60a&limit=100,';

  private apiUrl = 'https://api.newscatcherapi.com/v2/latest_headlines?lang=fr';
  private apiKey = 'n5GYzbyYMzLUib1N7Q2_vUVYThpa3f66bOVRigUAPKA';
  constructor(private http: HttpClient) {}

  public getCurentTopHeadLineNews() {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any>(this.apiUrl, { headers: headers });
  }
}
