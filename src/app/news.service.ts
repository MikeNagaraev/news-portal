import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewsService {

  constructor(private http: Http) { }

  getAllNews() {
    return this.http.get('/news')
  }

}
