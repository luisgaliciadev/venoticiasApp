import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';


const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;
const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  headLinePage = 0;
  categoriaActual = '';
  categoriaPage = 0;

  constructor(
    private _http: HttpClient
  ) { }

  private ejecutarQuery<T>(query:string) {
    query = apiUrl + query;
    return this._http.get<T>(query, {headers});
  }

  getTopHeadLines() {
    this.headLinePage++;
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=ve&page=${this.headLinePage}`);
  }

  getTopHeadLinesCategoria(category) {
    if (this.categoriaActual === category) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = category;
    }
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=ve&category=${category}&page=${this.categoriaPage}`);
  }

}
