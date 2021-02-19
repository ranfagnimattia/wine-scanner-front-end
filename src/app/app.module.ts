import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

import { RestService } from './providers/rest.service';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WineresultPage} from './wineresult/wineresult.page';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent,WineresultPage],
  entryComponents: [WineresultPage],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestService,
    NativeStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
