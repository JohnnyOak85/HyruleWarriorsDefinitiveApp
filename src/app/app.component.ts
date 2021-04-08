import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Legend',
      url: '/map/legend',
    },
    {
      title: 'Adventure',
      url: '/map/adventure',
    },
    {
      title: 'Great Sea',
      url: '/map/great sea',
    },
    {
      title: 'Master Quest',
      url: '/map/master quest',
    },
    {
      title: 'Master Wind Waker',
      url: '/map/master wind waker',
    },
    {
      title: 'Twilight',
      url: '/map/twilight',
    },
    {
      title: 'Termina',
      url: '/map/termina',
    },
    {
      title: 'Koholint Island',
      url: '/map/koholint island',
    },
    // {
    //   title: 'Grand Travels',
    //   url: '/map/grand travels'
    // },
    // {
    //   title: 'Lorule',
    //   url: '/map/lorule'
    // },
    // {
    //   title: 'Rewards',
    //   url: '/map/rewards',
    // },
    {
      title: 'About',
      url: '/about',
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('map/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
    }
  }
}
