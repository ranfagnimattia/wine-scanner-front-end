import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@Injectable({
  providedIn: 'root'
})
export class QrscannerService {

  constructor(private barcodeScanner: BarcodeScanner) { }

  scan():any {
    var data:any =null;
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      data = barcodeData;
      return data;
    }).catch(err => {
      console.log('Error', err);
    });
  }
}