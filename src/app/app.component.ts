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
  private broadcaster = new BroadcastChannel('broadcaster');
  public expandType = 'expand_more';
  public viewMenu = false;
  public viewList = [
    { name: 'Farming', value: 'farm' },
    { name: 'Weapons', value: 'weapon' },
    { name: 'Hearts', value: 'heart' },
    { name: 'Heart Pieces', value: 'piece' },
    { name: 'Outfits', value: 'outfit' },
    { name: 'Fairies', value: 'fairy' },
    { name: 'Fairy Wear', value: 'fairyWear' },
    { name: 'Fairy Food', value: 'fairyFood' },
    { name: 'Skulltulas', value: 'skulltula' },
    { name: 'None', value: '' },
  ];
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
    {
      title: 'Grand Travels',
      url: '/map/grand travels',
    },
    // {
    //   title: 'Lorule',
    //   url: '/map/lorule'
    // },
    {
      title: 'Rewards',
      url: '/map/rewards',
    },
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
    this.splashScreen.show();
    this.initializeApp();
    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(0, () => {
      navigator['app'].exitApp();
    });
  }

  ngOnInit() {
    const path =
      window.location.pathname.split('map/')[1] || localStorage.getItem('path');

    if (path != undefined) {
      localStorage.setItem('path', path);

      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );
      console.log(this.selectedIndex);
    }
  }

  toggleViewMenu() {
    this.viewMenu = !this.viewMenu;

    if (this.expandType === 'expand_more') this.expandType = 'expand_less';
    else this.expandType = 'expand_more';
  }

  radioSelect(event) {
    localStorage.setItem('viewType', event.detail.value);
    this.broadcaster.postMessage(event.detail.value);
  }
}
