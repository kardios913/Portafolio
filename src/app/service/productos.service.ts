import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  prod: Producto [] = [];
  productosFiltrado: Producto [] = [];
  cargando = true;
  constructor( private http: HttpClient ) {
    this.cargarProductos();
  }

private cargarProductos() {
  return new Promise(  ( resolve, reject ) => {

    this.http.get('https://portafolio-f5175.firebaseio.com/productos_idx.json')
        .subscribe( (resp: Producto[]) => {
          this.prod = resp;
          this.cargando = false;
          resolve();
        });

  });

}

public getProducto(id: String) {
  return this.http.get(`https://portafolio-f5175.firebaseio.com/productos/${ id }.json`);
}
buscarProducto( termino: string ) {


  if ( this.prod.length === 0 ) {
    // cargar productos
    this.cargarProductos().then( () => {
      // ejecutar después de tener los productos
      // Aplicar filtro
      this.filtrarProductos( termino );
    });

  } else {
    // aplicar el filtro
    this.filtrarProductos( termino );
  }


}

private filtrarProductos( termino: string ) {

  // console.log(this.productos);
  this.productosFiltrado = [];

  termino = termino.toLocaleLowerCase();

  this.prod.forEach( prod => {

    const tituloLower = prod.titulo.toLocaleLowerCase();

    if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
      this.productosFiltrado.push( prod );
    }

  });
}
}
