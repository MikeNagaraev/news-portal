import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class NewsService {

  news: any = [
    // {
    //   id: 1,
    //   title: "News 1",
    //   content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ",
    //   image: "/assets/images/item.jpg",
    //   description: "Lorem Ipsum is simply dummy"
    // },
    // {
    //   id: 2,
    //   title: "News 2",
    //   content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ",
    //   image: "/assets/images/item.jpg",
    //   description: "Lorem Ipsum is simply dummy"
    // },
    // {
    //   id: 3,
    //   title: "News 3",
    //   content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ",
    //   image: "/assets/images/item.jpg",
    //   description: "Lorem Ipsum is simply dummy"
    // }
  ];


  constructor(private http: Http, private router: Router) { }

  getAllNews() {
    return this.http
      .get('/home/news')
      .map(res => res.json())
  }

  getNewsItem(id) {
    return this.http
      .get('/home/news/' + id)
      .map(res => {
        return res.json()
      })
  }

  createNews(news) {
    return this.http
      .post('/home/news', news)
      .map(res => res.json())
  }

  navigate(link: any[]) {
    this.router.navigate(link)
  }

}
