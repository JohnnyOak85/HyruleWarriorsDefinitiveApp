// Angular
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

// Models

// Utils
import { Observable } from "rxjs";
import { TileFile } from "../models/tile.model";

@Injectable({
  providedIn: "root",
})
export class MapService {
  constructor(private http: HttpClient) {}

  public getTiles(folder: string): Observable<TileFile> {
    return this.http.get<TileFile>(`../../../assets/maps/${folder}/tiles.json`);
  }
}
