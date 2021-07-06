import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/internal/operators';
import { environment } from 'src/environments/environment';
import { Modo } from '../modelos/modo';

@Injectable({
  providedIn: 'root',
})
export class ModosService {
  constructor(private http: HttpClient) {}

  getModos() {
    return this.http.get(`${environment.API}/modos`).pipe(
      map((resp) => {
        const aModo: Modo[] = [];
        for (const value of Object.entries(resp)) {
          const oModo: Modo = value[1]; //Añadir estructura de pelicula al objeto
          aModo.push(oModo);
        }
        return aModo;
      })
    );
  }

  test() {
    return new Promise((resolve) => {
      this.http.get(environment.API + '/modos').subscribe((data) => {
        resolve(data);
      });
    });
  }
}
