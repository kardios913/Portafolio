import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina, InfoAbout } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagService {
inf: InfoPagina = { };
infAbout: InfoAbout = { };
cargado = false;
cargadoAbout = false;
  constructor(private http: HttpClient) {
  this.cargarinfo();
  this.cargarabout();
  }

  private cargarinfo() {
    this.http.get('https://portafolio-f5175.firebaseio.com/infoPage.json')
    .subscribe((resp: InfoPagina) => {
      this.cargado = true;
      this.inf = resp;
      });
  }

  private cargarabout() {
    this.http.get('https://portafolio-f5175.firebaseio.com/about.json')
    .subscribe((resp: InfoAbout) => {
      this.cargadoAbout = true;
      this.infAbout = resp;
      });
  }

}
