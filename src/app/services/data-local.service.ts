import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {
  noticias: Article[] = [];

  constructor(
    private _storage: Storage,
    public _toastController: ToastController
  ) { 
    this.cargarFavoritos();
  }

  async presentToast(message: string) {
    const toast = await this._toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  guardarNoticias(noticia: Article) {
    const existe = this.noticias.find( noti => noti.title ===  noticia.title);

    if (!existe) {
      this.noticias.unshift(noticia);
      this._storage.set('favoritos', this.noticias);      
    }

    this.presentToast('Agregado a Favoritos.');
    
  }

  async cargarFavoritos() {
    const favoritos =  await this._storage.get('favoritos');

    if (favoritos) {
      this.noticias = favoritos; 
    }    
  }

  borrarNoticia(noticia: Article) {
    this.noticias = this.noticias.filter( noti => noti.title !== noticia.title);
    this._storage.set('favoritos', this.noticias);
    this.presentToast('Borrado de Favoritos.');
  }
}
