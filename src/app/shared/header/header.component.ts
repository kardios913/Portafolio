import { Component, OnInit } from '@angular/core';
import { InfoPagService } from 'src/app/service/info-pag.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _service: InfoPagService) { }

  ngOnInit() {
  }

}
