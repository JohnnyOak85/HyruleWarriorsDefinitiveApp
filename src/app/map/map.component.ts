import { Component, OnInit, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";

import { MapService } from "../services/map.service";
import { Tile } from "../models/tile.model";

@Component({
  selector: "app-map",
  templateUrl: "./map.page.html",
  styleUrls: ["./map.page.scss"],
})
export class MapComponent implements OnInit {
  public mapId: string;
  public tiles: Tile[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private mapService: MapService,
    public dialog: MatDialog,
    protected http: HttpClient
  ) {}

  ngOnInit() {
    console.log(this.activatedRoute.snapshot)
    this.mapId = this.activatedRoute.snapshot.params.id;

    this.mapService.getTiles(this.mapId.toLowerCase()).subscribe((data) => {
      this.tiles = data.TILE_LIST;
    });
  }

  openTile(tile: string) {
    const config = new MatDialogConfig();

    config.data = { tile: tile, map: this.mapId.toLowerCase() };

    this.dialog.open(TileComponent, config);
  }
}

@Component({
  selector: "app-tile",
  templateUrl: "tile.modal.html",
  styleUrls: ['tile.modal.scss'],
})
export class TileComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { tile: any; map: string }
  ) {}
}
