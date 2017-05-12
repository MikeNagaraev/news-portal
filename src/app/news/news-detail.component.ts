import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'news-item',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsDetailComponent implements OnInit {

  newsItem: any;

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(params => this.newsItem = this.newsService.getNewsItem(+params['id']))
  }
}
