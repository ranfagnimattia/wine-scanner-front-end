import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WineresultPageRoutingModule } from './wineresult-routing.module';

import { WineresultPage } from './wineresult.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WineresultPageRoutingModule
  ],
  declarations: [WineresultPage]
})
export class WineresultPageModule {}
