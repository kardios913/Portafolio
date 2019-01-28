import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { infoPagina } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagService {
inf: infoPagina = { };
cargado = false;
  constructor(private http: HttpClient) {
    this.http.get('assets/data/data-pag.json')
   .subscribe((resp: infoPagina) => {
     this.cargado = true;
     this.inf = resp;
     });

  }

}
