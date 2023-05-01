import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { HeroPageComponent } from './hero-page/hero-page.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  imports: [SharedModule],
  declarations: [HomePageComponent, HeroPageComponent, FeaturesComponent],
  providers: [],
  exports: [HomePageComponent],
})
export class HomePageModule {}
