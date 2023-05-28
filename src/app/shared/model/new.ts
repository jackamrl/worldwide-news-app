// Old model
// export interface New {
//   source?: object;
//   author?: string;
//   title?: string;
//   description?: string;
//   url?: string;
//   urlToImage?: string;
//   publishedAt?: Date;
//   content?: string;
// }
export interface New {
  source?: object;
  authors?: string;
  title?: string;
  summary?: string;
  excerpt?: string;
  link?: string;
  clean_url?: string;
  media?: string;
  topic?: string;
  language?: string;
  published_date?: Date;
  twitter_account?: Date;
}
