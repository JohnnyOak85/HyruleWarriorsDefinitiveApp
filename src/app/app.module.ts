import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FileService } from './services/file.service';

import { CreditsComponent } from './components/credits/credits.component';
import { ChallengeComponent } from './components/challenge/challenge.component';
import { LegendsComponent } from './components/legend/legend.component';
import { MapComponent } from './components/map/map.component';
import { TileComponent } from './components/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    CreditsComponent,
    ChallengeComponent,
    LegendsComponent,
    MapComponent,
    TileComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
  ],
  exports: [MatGridListModule, MatDialogModule, MatCardModule],
  providers: [
    FileService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
