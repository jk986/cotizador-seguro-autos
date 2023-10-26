import { Component } from '@angular/core';

@Component({
  selector: 'app-appseguro',
  templateUrl: './appseguro.component.html',
  styleUrls: ['./appseguro.component.css']
})
export class AppseguroComponent {
  showSpiner?:boolean;
  constructor(){
  }
  openSpiner=(value:any)=>this.showSpiner=value;
}
