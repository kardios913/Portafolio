import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../service/productos.service';
import { ItemProducto } from '../../interfaces/item-producto.interface';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
 item: ItemProducto ;
 id: String;
  constructor(private route: ActivatedRoute,
              private productosService: ProductosService) { }

  ngOnInit() {
    this.route.params
      .subscribe(arg => {
       this.productosService.getProducto(arg['id'])
       .subscribe((producto: ItemProducto)  => {
        this.id =  arg['id'];
        this.item = producto;
       });
      });
  }

}
