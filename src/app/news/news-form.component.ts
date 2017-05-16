import { Component } from '@angular/core';
import { NewsService } from '../news.service';
import { NewsComponent } from '../news/news.component';
import { Router } from '@angular/router';

@Component({
  selector: 'news-form',
  templateUrl: './news-form.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsFormComponent {

  newsItem = {
    id: "",
    title: "",
    description: "",
    content: "",
    image: ""
  }

  constructor(
    private newsService: NewsService,
    private router: Router
  ) { }

  createNews() {
    this.newsService.createNews(this.newsItem)
      .subscribe(res => {
        this.router.navigate(['/news', res._id])
      });
  }

}
