import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute, Params  } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'news-item',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsDetailComponent implements OnInit {

  newsItem = {};

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.newsService.getNewsItem(this.route.snapshot.params['news_id'])
      .subscribe(res => this.newsItem = res)
  }
}
