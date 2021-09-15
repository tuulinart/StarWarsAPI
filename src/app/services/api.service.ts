import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListFilm } from './models/Films.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private api: unknown = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  readData(): Observable<ListFilm> {
    const url = `${this.api}films`;

    return this.http.get<ListFilm>(url);
  }


}
