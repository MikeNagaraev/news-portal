import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NewslistComponent } from './newslist/newslist.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsDetailComponent } from './news/news-detail.component';
import { NewsFormComponent } from './news/news-form.component';

import { NewsService } from './news.service';
import { NavigationService } from './navigation.service';

import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    NewslistComponent,
    NewsDetailComponent,
    NewsFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [NewsService, NavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
