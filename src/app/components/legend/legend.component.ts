import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { TileComponent } from '../tile/tile.component';
import { Tile, TileList } from '../../models/tile-list.model';
import { FileService } from '../../services/file.service';

@Component({
  selector: 'app-map',
  templateUrl: './legend.html',
  styleUrls: ['./legend.scss'],
})
export class LegendsComponent implements OnInit {
  public mapId: string;
  public tiles: Tile[];
  public viewType = '';
  private broadcaster = new BroadcastChannel('broadcaster');

  constructor(
    private fileService: FileService,
    public dialog: MatDialog,
    protected http: HttpClient
  ) {}

  ngOnInit() {
    this.mapId = 'Legend';

    this.fileService
      .getList<TileList>(`maps/legend/tiles`)
      .subscribe((data) => {
        this.tiles = data.TILE_LIST;
      });

    this.viewType = localStorage.getItem('viewType');

    this.broadcaster.onmessage = (message) => {
      this.viewType = message.data;
      // this.openTile({ blank: true });
    };
  }

  openTile(tile: Tile) {
    if (tile.blank) return;

    const config = new MatDialogConfig();

    config.data = { tile, map: this.mapId.toLowerCase() };

    this.dialog.open(TileComponent, config);
  }
}
