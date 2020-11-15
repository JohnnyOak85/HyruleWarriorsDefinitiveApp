// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Models
import { TileFile } from '../tile/models/tile.model';

// Utils
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  constructor(private http: HttpClient) {}

  public getTiles(folder: string): Observable<TileFile> {
    return this.http.get<TileFile>(`../../../assets/maps/${folder}/tiles.json`);
  }
}
