import { Component, OnInit } from '@angular/core';
const shell = window.require('electron').shell;

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  openLink(link: string) {
    shell.openExternal(link);
  }
}
