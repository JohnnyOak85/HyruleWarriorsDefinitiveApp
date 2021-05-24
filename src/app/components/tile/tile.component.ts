import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Tile } from '../../models/tile-list.model';

@Component({
  selector: 'app-tile',
  templateUrl: 'tile.html',
  styleUrls: ['tile.scss'],
})
export class TileComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { tile: Tile; map: string }
  ) {}
}
