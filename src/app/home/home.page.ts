import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { WineresultPage } from '../wineresult/wineresult.page';
import { HttpclientrequesterService } from 'src/app/services/httpclientrequester.service';
import { LoadingController, AlertController} from '@ionic/angular';
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {
  public scan_result: any;

  constructor(private barcodeScanner: BarcodeScanner, public modalController: ModalController, private http: HttpclientrequesterService,public loadingController: LoadingController, public alertController: AlertController) {
    console.log('Reading local json file...');
  }

  ngOnInit() {
    var elems1 = document.querySelectorAll('.slider');
    var instance = M.Slider.init(elems1,{indicators:false, height:600, interval:6000});
    console.log(instance);
  }

  scan() {
    const options: BarcodeScannerOptions = {
      preferFrontCamera : false, // iOS and Android
      showFlipCameraButton : true, // iOS and Android
      showTorchButton : true, // iOS and Android
      torchOn: false, // Android, launch with the torch switched on (if available)
      prompt : 'Place a code inside the scan area', // Android
      resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
      formats : 'EAN_13,EAN_8,QR_CODE,PDF_417', // default: all but PDF_417 and RSS_EXPANDED
      orientation : 'portrait', // Android only (portrait|landscape), default unset so it rotates with the device
    };
    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.getForecast(barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });
  }

  async getForecast(year) {
    const loading = await this.loadingController.create({
      message: 'Scanning in corso...'
    });
    this.http.request(year).subscribe(data => {
      console.log(data);
      loading.dismiss();
      if(data.err_msg) {
        this.showAlert(data.err_msg.toString());
      }
      else
        this.presentModal(data);
    });
    loading.present();
  }

  async presentModal(data:any) {
    const modal = await this.modalController.create({
      component: WineresultPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'data': data
      }
    });
    return await modal.present();
  }

  async showAlert(msg:any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Errore',
      message: msg,
      buttons: ['OK']
    });
    alert.present();
  }
}