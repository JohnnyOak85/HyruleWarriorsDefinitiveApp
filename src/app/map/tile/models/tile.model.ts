interface Spoil {
  kos?: number;
  time?: number;
  damage?: number;
  loot?: string;
  char?: string;
  where?: string;
}

export interface Tile {
  position: string;
  blurb: string;
  rule?: string;
  farming?: any;
  level?: number;
  search?: string[];
  rank?: Spoil;
  victory?: Spoil[];
  treasure?: Spoil[];
  pot?: Spoil[];
  skulltula: string[];
}

export interface TileFile {
  TILE_LIST: Tile[];
}
