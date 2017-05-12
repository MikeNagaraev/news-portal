import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NewslistComponent } from './newslist/newslist.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsDetailComponent } from './news/news-detail.component';

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },

  // for fun
  {
    path: 'business',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'policy',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'opinions',
    component: HomeComponent,
    pathMatch: 'full'
  },

  //

  {
    path: 'news',
    component: NewsComponent
  },

  {
    path: 'news/:id',
    component: NewsDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
