import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { MapRoutingModule } from "./map-routing.module";

import { MapComponent, TileComponent } from "./map.component";

import { MatGridListModule } from "@angular/material/grid-list";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapRoutingModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
  ],
  exports: [
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    MatDividerModule,
  ],
  declarations: [MapComponent, TileComponent],
})
export class MapModule {}
