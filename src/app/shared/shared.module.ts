import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { NewsService } from './service/news.service';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  providers: [NewsService],
  imports: [CommonModule],
  exports: [NavbarComponent, FooterComponent],
})
export class SharedModule {}
