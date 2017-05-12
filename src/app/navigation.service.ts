import { Injectable } from '@angular/core';

@Injectable()
export class NavigationService {
  navigationTabs: any = [
    {
      name: "Home",
      link: "home"
    },
    {
      name: "Business",
      link: "business"
    },
    {
      name: "Policy",
      link: "policy"
    },
    {
      name: "Opinions",
      link: "opinions"
    },
    {
      name: "Photos",
      link: "photos"
    },
    {
      name: "Videos",
      link: "videos"
    },
    {
      name: "News",
      link: "news"
    }
  ]

  constructor() { }

  getNavigationTabs() {
    return this.navigationTabs;
  }

}
