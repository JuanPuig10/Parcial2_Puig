import { Component, OnInit } from '@angular/core';
import { Animes } from '../animes';
import { AnimesService } from '../animes.service';

@Component({
  selector: 'app-animes-list',
  templateUrl: './animes-list.component.html',
  styleUrls: ['./animes-list.component.css']
})
export class AnimesListComponent implements OnInit {
  animes: Array<Animes> = [];
  constructor(private animesService: AnimesService) { }
  selectedAnime!: Animes;
  selected = false;

  getAnimes(): void {
    this.animesService.getBooks().subscribe((animes) => {
      this.animes = animes;
    });
  }

  onSelected(anime: Animes): void {
    this.selected = true;
    this.selectedAnime = anime;
  }
  
  ngOnInit() {
    this.getAnimes();

  }

}
