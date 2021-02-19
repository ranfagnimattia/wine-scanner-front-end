import { Component, Input, OnInit, Output } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-wineresult',
  templateUrl: './wineresult.page.html',
  styleUrls: ['./wineresult.page.scss'],
})

export class WineresultPage implements OnInit {
  @Input() data: any;
  favourite: Boolean;

  constructor(public storage: StorageService, public modalController:ModalController, public navParams: NavParams, public alertController: AlertController) {

   }

  ngOnInit() {
    this.data = this.navParams.get('data');
    console.log(this.navParams.get('data'));
    if(this.storage.getItem(this.data.year) != null) {
      this.favourite = true;
    }
    else
      this.favourite = false;
  }

  public dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  } 

  public info() {
    let info = '<div class="container"><p>La qualit&agrave; del vino, la sua longevit&agrave; e le sue caratteristiche possono variare, anche sensibilmente, nelle singole annate.'+
    "Risulta fondamentale, a tal proposito, l’andamento climatico durante la fase vegetativa (aprile-settembre).</p>"+
    "<h2>Come mai &egrave; importante l’umidit&agrave; per determinare la qualit&agrave; del vino?</h2>"+
    "<p> Il clima influisce sul vitigno e sul suo sviluppo durante la fase vegetativa della vite, che spesso va dalla met&agrave; del mese di aprile fino alla met&agrave; del mese di settembre."+
    " &Egrave; utile misurare l’umidit&agrave; del terreno del vitigno, dato che le piogge della fase primaverile sono utili per l’accumulo di acqua a livello dell’apparato radicale. "+
    "Questo permette alla pianta di sviluppare bene la prima fase della vegetazione. Successivamente – nei mesi estivi – la pianta ha un progressivo rallentamento vegetativo, dato che i terreni tendono a perdere le riserve idriche a causa della relativa scarsa piovosit&agrave;. </p>"+
    "<h2>Come mai &egrave; importante la velocit&agrave; del vento per determinare la qualit&agrave; del vino?</h2>"+
    "<p> L’effetto dei venti varia in funzione della loro intensit&agrave; e della loro provenienza. Venti freschi e non violenti nei periodi più caldi possono alleviare l’ eccessivo calore."+
    " Venti caldi nei periodi più caldi possono aggravare l’eventuale stress calorico della pianta. "+
    " In generale le brezze sono comunque favorevoli perch&eacute; limitano l’attivit&agrave; di alcuni parassiti e regolano il livello di umidit&agrave; nell’aria, "+
    "scongiurando pericolosi ammuffimenti durante il periodo della fioritura. </p> </div>";
    this.showAlert(info);
  } 

  addFavourite(year: string, data: any) {
    this.storage.addItem(year,data);
    this.favourite = true;
  }

  async showAlert(msg:any) {
    const alert = await this.alertController.create({
      cssClass: 'info-alert',
      header: 'FAQ',
      message: msg,
      buttons: ['Ho capito.']
    });
    alert.present();
  }
}
