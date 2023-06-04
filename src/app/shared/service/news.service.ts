import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  curentTopHeadLineNews: string =
    'http://api.mediastack.com/v1/news?access_key=4644369840dff5852009e9e6a171a60a&limit=100,';

  private curentTopHeadLineNewsApiUrl =
    'https://api.newscatcherapi.com/v2/latest_headlines?lang=fr';
  private sportNewsApiUrl =
    'https://api.newscatcherapi.com/v2/latest_headlines?topic=sport&lang=fr';
  private techNewsApiUrl =
    'https://api.newscatcherapi.com/v2/latest_headlines?topic=tech&lang=fr';
  private politicsNewsApiUrl =
    'https://api.newscatcherapi.com/v2/latest_headlines?topic=politics&lang=fr';
  private fianceNewsApiUrl =
    'https://api.newscatcherapi.com/v2/latest_headlines?topic=finance&lang=fr';
  private musicNewsApiUrl =
    'https://api.newscatcherapi.com/v2/latest_headlines?topic=music&lang=fr';

  private apiKey = 'n5GYzbyYMzLUib1N7Q2_vUVYThpa3f66bOVRigUAPKA';

  constructor(private http: HttpClient) {}

  public getCurentTopHeadLineNews() {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any>(this.curentTopHeadLineNewsApiUrl, {
      headers: headers,
    });
  }

  public getSportNews() {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any>(this.sportNewsApiUrl, { headers: headers });
  }
  public getTechNews() {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any>(this.techNewsApiUrl, { headers: headers });
  }
  public getMusicNews() {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any>(this.musicNewsApiUrl, { headers: headers });
  }
  public getPoliticsNews() {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any>(this.politicsNewsApiUrl, { headers: headers });
  }
  public getFinaceNews() {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any>(this.fianceNewsApiUrl, { headers: headers });
  }
}
