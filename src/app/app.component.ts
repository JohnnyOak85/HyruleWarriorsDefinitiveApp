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
  public displayExpandType = 'expand_more';
  public mapExpandType = 'expand_more';
  public displayMenu = false;
  public mapMenu = false;
  public selectedDisplay = 'none';
  public displayList = [
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
  public appPages = [
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
    {
      title: 'Lorule',
      url: '/map/lorule',
    },
    {
      title: 'Rewards',
      url: '/map/rewards',
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
    this.selectedDisplay = localStorage.getItem('selectedDisplay');
  }

  toggleDisplayMenu() {
    this.displayMenu = !this.displayMenu;

    if (this.displayExpandType === 'expand_more')
      this.displayExpandType = 'expand_less';
    else this.displayExpandType = 'expand_more';
  }

  toggleMapMenu() {
    this.mapMenu = !this.mapMenu;

    if (this.mapExpandType === 'expand_more')
      this.mapExpandType = 'expand_less';
    else this.mapExpandType = 'expand_more';
  }

  setURL(mode: string, toggleMenu?: boolean) {
    localStorage.setItem('path', mode);

    if (toggleMenu) this.toggleMapMenu();
  }

  radioSelect(event) {
    this.selectedDisplay = event.detail.value;
    localStorage.setItem('selectedDisplay', event.detail.value);
    this.broadcaster.postMessage(event.detail.value);
    this.toggleDisplayMenu();
  }
}
