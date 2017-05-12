import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  navigationTabs: any;

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
    this.navigationTabs = this.navigationService.getNavigationTabs();
  }

  isPathEqual(navTab) {
    if (window.location.href.indexOf(navTab.link) > -1) {
      return true;
    }
  }

}
