import { Component, OnInit } from '@angular/core';
import { InfoPagService } from 'src/app/service/info-pag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _service: InfoPagService,
              private router: Router) { }

  ngOnInit() {
  }
  buscarProducto(termino: String) {
    if (termino.length < 1 ) {
      return;
    }
    this.router.navigate(['/search', termino]);
  }

}
