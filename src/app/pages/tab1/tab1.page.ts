import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias: Article[] = [];

  constructor(
    private _noticiasService: NoticiasService
  ) {}

  ngOnInit() {
    this.cargarNoticias();
  }

  cargarNoticias(event?) {
    this._noticiasService.getTopHeadLines().subscribe(
      response => {        
        console.log(response);
        if (response.articles.length === 0) {
          event.target.disabled = true;
          event.target.complete();
          return;
        }

        this.noticias.push(...response.articles);   
        if (event) {
          event.target.complete();
        }
      }
    );   
  }

  loadData(event) {
    this.cargarNoticias(event);
  }

}
