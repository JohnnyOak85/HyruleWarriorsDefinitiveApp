interface Spoil {
  amount?: number;
  char?: string;
  damage?: number;
  kos?: number;
  loot?: string | string[];
  note?: string;
  time?: number;
  weapon?: boolean;
  where?: string;
}

export interface Tile {
  blank: boolean;
  blurb: string;
  fairy?: string;
  fairyWear: string;
  fairyFood: string;
  farm?: Spoil[];
  heart?: string;
  level?: number;
  outfit?: string;
  piece?: string;
  position: string;
  pot?: Spoil[];
  rank?: Spoil;
  rule?: string;
  search?: string[];
  skulltula: string[];
  treasure?: Spoil[];
  victory?: Spoil[];
  weapon?: string;
}

export interface TileList {
  TILE_LIST: Tile[];
}
