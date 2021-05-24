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
  public viewExpandType = 'expand_more';
  public mapExpandType = 'expand_more';
  public viewMenu = false;
  public mapMenu = false;
  public selectedView = 'none';
  public viewList = [
    { name: 'Level', value: 'level' },
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
    // {
    //   title: 'Legend Mode',
    //   url: '/legend-mode',
    // },
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
    // {
    //   title: 'Challenge Mode',
    //   url: '/challenge-mode',
    // },
    // {
    //   title: 'Credits',
    //   url: '/credits',
    // },
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
      window.location.pathname.split('map/')[1] ||
      localStorage.getItem('path').replace('map/', '');

    if (path != undefined) {
      // localStorage.setItem('path', `map/${path}`);

      this.selectedIndex = this.appPages.findIndex(
        (page) => page.title.toLowerCase() === path.toLowerCase()
      );

      this.selectedView = localStorage.getItem('viewType');
    }
  }

  toggleViewMenu() {
    this.viewMenu = !this.viewMenu;

    if (this.viewExpandType === 'expand_more') this.viewExpandType = 'expand_less';
    else this.viewExpandType = 'expand_more';
  }

  toggleMapMenu() {
    this.mapMenu = !this.mapMenu;

    if (this.mapExpandType === 'expand_more') this.mapExpandType = 'expand_less';
    else this.mapExpandType = 'expand_more';
  }

  setURL(mode: string) {
    localStorage.setItem('path', mode);
  }

  radioSelect(event) {
    console.log(event)
    this.selectedView = event.detail.value;
    localStorage.setItem('viewType', event.detail.value);
    this.broadcaster.postMessage(event.detail.value);
    this.toggleViewMenu();
  }
}
