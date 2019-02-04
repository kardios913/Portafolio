import { Component } from '@angular/core';
import { InfoPagService } from './service/info-pag.service';
import { ProductosService } from './service/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 cargando = true;
  constructor (public _infoPag: InfoPagService,
              public productosservice: ProductosService) {
this.cargando = false;
 }
}
