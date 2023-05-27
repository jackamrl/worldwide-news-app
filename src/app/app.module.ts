import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageModule } from './home-page/home-page.module';
import { SharedModule } from './shared/shared.module';
import { NewsPageComponent } from './news-page/news-page.component';
import { NewCardComponent } from './new-card/new-card.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPageComponent } from './new-page/new-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewModalComponent } from './new-modal/new-modal.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    NewCardComponent,
    NewPageComponent,
    PageNotFoundComponent,
    NewModalComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomePageModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
