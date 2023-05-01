import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageModule } from './home-page/home-page.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomePageModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
