import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { ModalController } from '@ionic/angular';
import { WineresultPage } from '../wineresult/wineresult.page';
import { HttpclientrequesterService } from 'src/app/services/httpclientrequester.service';
import { LoadingController, AlertController} from '@ionic/angular';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  public scan_result: any;


  constructor(private barcodeScanner: BarcodeScanner, public modalController: ModalController, private http: HttpclientrequesterService,public loadingController: LoadingController, public alertController: AlertController) {
  }

  ngOnInit() {
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
    //this.scan_result = this.qrScanner.scan();
    this.barcodeScanner.scan(options).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if(isNaN(Number(barcodeData.text)))
      {
        this.showAlert("Il QR Code scannerizzato non è valido, riprova con un altro QR Code.");
      }
      else {
        this.getForecast(barcodeData.text);
      }
     }).catch(err => {
         console.log('Error', err);
     });
    
    //this.getForecast("2019")
  }

  async getForecast(year) {
    const loading = await this.loadingController.create({
      message: 'Scanning in corso...'
    });
    /*this.http.request(year).subscribe(data => {
      data.name= 'Brunello Di Montalcino';
      data.img= '../../assets/img/montalcino_1.jfif';
      data.year=year;
      data.quality = Math.round(data.quality);
      console.log(data);
      loading.dismiss();
      if(data.err_msg) {
        this.showAlert(data.err_msg.toString());
      }
      else
        this.presentModal(data);
    });*/
    this.http.request(year).subscribe((data) => {
      data.name= 'Brunello Di Montalcino';
      data.img= '../../assets/img/brunello_wineresult.jfif';
      data.year=year;
      data.quality = Math.round(data.quality);
      console.log(data);
      loading.dismiss();
      if(data.err_msg) {
        this.showAlert(data.err_msg.toString());
      }
      else
        this.presentModal(data);
    },
    (error) => {
      console.error(error);
      loading.dismiss();
      this.showAlert("C'è stato un errore sull'invio della richiesta del vino scelto. Riprova lo scan.");
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
