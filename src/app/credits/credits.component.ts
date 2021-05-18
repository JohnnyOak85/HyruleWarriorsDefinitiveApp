// Angular
import { Component, OnInit } from '@angular/core';

// Models
import { CreditsEntry, CreditsList } from '../models/credits-list.model';

// Services
import { FileService } from '../services/file.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss'],
})
export class CreditsComponent implements OnInit {
  public credits: CreditsEntry[];

  constructor(private fileService: FileService) {}

  openLink(url: string) {
    window.open(url, '_system');
  }

  ngOnInit() {
    this.fileService.getList<CreditsList>(`credits`).subscribe((data) => {
      this.credits = data.CREDITS;
    });
  }
}
