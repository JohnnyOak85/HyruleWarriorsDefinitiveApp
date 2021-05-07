interface Spoil {
  kos?: number;
  time?: number;
  damage?: number;
  loot?: string;
  char?: string;
  weapon?: boolean;
  where?: string;
}

export interface Tile {
  position: string;
  blurb: string;
  blank?: boolean;
  rule?: string;
  farm?: any;
  level?: number;
  search?: string[];
  rank?: Spoil;
  victory?: Spoil[];
  treasure?: Spoil[];
  pot?: Spoil[];
  skulltula?: string[];
  weapon?: string;
  fairy?: string;
}

export interface TileFile {
  TILE_LIST: Tile[];
}
