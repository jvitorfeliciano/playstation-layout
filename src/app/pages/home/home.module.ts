import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [HomeComponent, CardComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
