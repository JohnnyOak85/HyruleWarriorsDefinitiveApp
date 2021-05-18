// Angular
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Utils
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor(private http: HttpClient) {}

  getList<T>(folder: string): Observable<T> {
    return this.http.get<T>(`./assets/${folder}.json`);
  }
}
