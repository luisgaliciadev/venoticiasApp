import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../interfaces/interfaces';

// Native
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  

  constructor(
    private _inAppBrowser: InAppBrowser,
    public _actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {}

  abrirNoticia() {
    console.log(this.noticia.url);
    const browser = this._inAppBrowser.create(this.noticia.url, '_system');
  }

  async lanzarMenu() {

    const actionSheet = await this._actionSheetController.create({
      mode: 'md',
      buttons: [
      {
        cssClass: 'action-grey',
        text: 'Compartir',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, 
     {
        cssClass: 'action-grey',
        text: 'Guardar',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, 
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

  

}
