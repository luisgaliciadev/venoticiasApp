import { Component, OnInit, Input, enableProdMode } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { ActionSheetController, Platform } from '@ionic/angular';

// Native
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { DataLocalService } from '../../services/data-local.service';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() enFavoritos;
  

  constructor(
    private _inAppBrowser: InAppBrowser,
    public _actionSheetController: ActionSheetController,
    private _socialSharing: SocialSharing,
    private _dataLocal: DataLocalService,
    private _platform: Platform
  ) { }

  ngOnInit() {
    console.log('favoritos', this.enFavoritos);
  }

  abrirNoticia() {
    console.log(this.noticia.url);
    const browser = this._inAppBrowser.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {

    let guadarBorrarBtn;

    if (this.enFavoritos) {
      guadarBorrarBtn = {
        cssClass: 'action-grey',
        text: 'Borrar de Favoritos',
        icon: 'trash',
        handler: () => {
          // console.log('Favorite clicked');
          this._dataLocal.borrarNoticia(this.noticia);
        }
      }
    } else {
      guadarBorrarBtn = {
        cssClass: 'action-grey',
        text: 'Guardar en Favoritos',
        icon: 'heart',
        handler: () => {
          // console.log('Favorite clicked');
          this._dataLocal.guardarNoticias(this.noticia);
        }
      }
    }

    const actionSheet = await this._actionSheetController.create({
      mode: 'md',
      buttons: [
      {
        cssClass: 'action-grey',
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          this.compartirNoticia();

          
        }
      },
      guadarBorrarBtn,     
      {
        text: 'Cerrar',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-grey',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

  }

  compartirNoticia() {

    if (this._platform.is('cordova')) {
      this._socialSharing.share(
        this.noticia.title,
        this.noticia.source.name,
        '', // file o archivo
        this.noticia.url  
      );
    } else {
      if (navigator['share']) {
        navigator['share']({
          title: this.noticia.title,
          text: this.noticia.description,
          url: this.noticia.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }
      console.log('No se pudo compartir, navegador no compatible...')
    }   
  }
}
