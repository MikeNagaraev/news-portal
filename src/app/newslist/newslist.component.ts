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
    this.newsService.getAllNews()
      .subscribe(
        news => this.allNews = news,
        error => console.log("error", error)
      )
  }

  // deleteNewsItem(id) {
  //   this.newsService.delete(id)
  //     .subscribe(
  //       news => this.allNews = news
  //     )
  // }
}
