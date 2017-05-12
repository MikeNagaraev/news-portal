import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';

@Component({
  selector: 'news-list',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {
  allNews: any;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.allNews = this.newsService.getAllNews();
  }

}
