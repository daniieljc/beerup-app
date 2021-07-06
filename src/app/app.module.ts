import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {AdmobService} from './servicios/admob.service';
import {Admob} from '@ionic-native/admob/ngx';

import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

import * as Sentry from "@sentry/browser";
import {SentryIonicErrorHandler} from './sentry-ionic-error-handler';

Sentry.init({
  dsn: "https://808a80c8832d4c7298d4d945ed999ba7@o887190.ingest.sentry.io/5850190",
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: ErrorHandler, useClass: SentryIonicErrorHandler},  // Intialize a error handler that will report to Sentry
    AdmobService,
    Admob,
    ScreenOrientation,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
