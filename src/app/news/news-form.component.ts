import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsFormComponent {

  newsItem = {
    title: "",
    description: "",
    content: "",
    image: ""
  }

  constructor(
    private newsService: NewsService
  ) {}

  createNews() {
    this.newsService.createNews(this.newsItem);
  }

}
