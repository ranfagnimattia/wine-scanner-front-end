import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WineresultPage } from './wineresult.page';

const routes: Routes = [
  {
    path: '',
    component: WineresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WineresultPageRoutingModule {}
