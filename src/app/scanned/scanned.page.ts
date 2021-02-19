import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { WineresultPage } from '../wineresult/wineresult.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-scanned',
  templateUrl: './scanned.page.html',
  styleUrls: ['./scanned.page.scss'],
})
export class ScannedPage implements OnInit {
  data_list : Array<any>;
  len : number;

  constructor(public storage : StorageService, public modalController : ModalController) {
    this.data_list = Array<any>();
  }

  ngOnInit() {
    this.storage.getAllItems().then(data=>{
      this.data_list = data;
    });
    this.len = this.data_list.length;
  }

  refresh(event : any) {
    setTimeout(() => {
      this.storage.getAllItems().then(data=>{
        this.data_list = data;
      });
      this.len = this.data_list.length;
      console.log(this.data_list);
      console.log(this.len);
      event.target.complete();
    }, 2000);
  }

  ionViewWillEnter() {
    this.storage.getAllItems().then(data=>{
      this.data_list = data;
    });
    this.len = this.data_list.length;
  }

  async remove(key : any) {
    this.storage.deleteItem(key).then(data => {
      console.log(data);
    });
    this.storage.getAllItems().then(data=>{
      this.data_list = data;
    });
    this.len = this.data_list.length;
  }

  async show(key : string) {
    this.storage.getItem(key).then(data => {
      console.log(data);
      this.presentModal(data);
    });
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

}