import { Component, OnInit } from '@angular/core';

import { CreditsEntry, CreditsList } from '../../models/credits-list.model';
import { LinkList } from 'src/app/models/link-list.model';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.html',
  styleUrls: ['./credits.scss'],
})
export class CreditsComponent implements OnInit {
  public credits: CreditsEntry[];
  public paypalURL =
    'https://www.paypal.com/donate?hosted_button_id=VSCKB9GVSENJQ';
  public discordURL = 'https://discord.gg/ErHYKYAzSm';

  constructor(private fileService: FileService) {}

  openLink(url: string) {
    window.open(url, '_system');
  }

  ngOnInit() {
    this.fileService.getList<CreditsList>(`credits`).subscribe((data) => {
      this.credits = data.CREDITS;
    });

    this.fileService.getFile<LinkList>('sites').subscribe((data) => {
      this.paypalURL = data.paypal;
      this.discordURL = data.discord;
    });
  }
}
