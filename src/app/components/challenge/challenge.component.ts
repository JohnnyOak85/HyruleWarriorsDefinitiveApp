// Angular
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { FileService } from '../../services/file.service';
import { Challenge, ChallengeList } from '../../models/challenge-list.model';
import { TileComponent } from '../tile/tile.component';

@Component({
  selector: 'app-credits',
  templateUrl: './challenge.html',
  styleUrls: ['./challenge.scss'],
})
export class ChallengeComponent implements OnInit {
  public challengeList: ChallengeList;
  public modes: string[];

  constructor(private fileService: FileService, public dialog: MatDialog) {}

  openLink(url: string) {
    window.open(url, '_system');
  }

  ngOnInit() {
    this.fileService.getList<ChallengeList>('challenge').subscribe((data) => {
      this.challengeList = data;
      this.modes = Object.keys(data);

      console.log(this.challengeList);
    });
  }

  openTile(challenge: Challenge) {
    console.log(challenge);
    const config = new MatDialogConfig();

    config.data = { tile: challenge, map: '' };

    this.dialog.open(TileComponent, config);
  }
}
