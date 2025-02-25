import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimesListComponent } from './animes-list/animes-list.component';
import { AnimesDetailComponent } from './animes-detail/animes-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [AnimesListComponent],
  declarations: [AnimesListComponent,AnimesDetailComponent]
})
export class AnimesModule { }
