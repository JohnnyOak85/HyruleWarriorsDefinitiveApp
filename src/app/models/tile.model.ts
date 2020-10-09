interface Spoil {
  loot?: string;
  kos?: number;
  time?: number;
  damage?: number;
  char?: string;
  where?: string;
}

export interface Tile {
  position: string;
  blurb: string;
  search?: string[];
  aRank?: Spoil;
  victory?: Spoil[];
  treasure?: Spoil[];
  pots?: Spoil[];
  skulltulas: string[];
}

export interface TileFile {
  TILE_LIST: Tile[];
}
