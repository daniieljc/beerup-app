import { Injectable } from '@angular/core';
import { Frase } from '../modelos/frase';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FrasesService {
  constructor(private http: HttpClient) {}

  getFrases(id: any) {
    return new Promise((resolve) => {
      this.http.get(environment.API + '/frases/' + id).subscribe((data) => {
        resolve(data);
      });
    });
  }
}
