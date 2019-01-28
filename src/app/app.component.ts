import { Component } from '@angular/core';
import { InfoPagService } from './service/info-pag.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor (public _infoPag: InfoPagService) {

 }
}
