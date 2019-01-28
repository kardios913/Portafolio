import { Component, OnInit } from '@angular/core';
import { InfoPagService } from '../../service/info-pag.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: Number = new Date().getFullYear();
  constructor(public _service: InfoPagService) { }

  ngOnInit() {
  }

}
