import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class NewsService {

  news: any = [
    {
      id: 1,
      title: "News 1",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ",
      image: "/assets/images/item.jpg",
      description: "Lorem Ipsum is simply dummy"
    },
    {
      id: 2,
      title: "News 2",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ",
      image: "/assets/images/item.jpg",
      description: "Lorem Ipsum is simply dummy"
    },
    {
      id: 3,
      title: "News 3",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the ",
      image: "/assets/images/item.jpg",
      description: "Lorem Ipsum is simply dummy"
    }
  ]



  constructor(private http: Http) { }

  getAllNews() {
    return this.news;
  }

  getNewsItem(id) {
    for(let i = 0; i < this.news.length; i++) {
      if (this.news[i].id === id) {
        return this.news[i];
      }
    }
  }

  createNews(news) {
    console.log(news)
  }

}
