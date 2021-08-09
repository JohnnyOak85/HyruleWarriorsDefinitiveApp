// Angular
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FileService } from '../../services/file.service';
import {
  ChallengeList,
  ChallengeMode,
} from '../../models/challenge-list.model';

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
    });
  }

  showChallenges(mode: ChallengeMode) {
    mode.show = !mode.show;
  }
}
