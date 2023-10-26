import { Component, OnInit } from '@angular/core';
import { OptionsQuoteService } from 'src/app/services/options-quote.service';
import { MARCAS,PLANES } from 'src/app/constants/Marcas';
import { Quote } from 'src/app/models/Quote';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit{
  ///
  resultado:any;
  opciones = {marca:'',plan:'',year:''};
  ///
  constructor( private _quoteService:OptionsQuoteService){
  }
  ///
  ngOnInit(): void {
    // traer cotizacion
    this.resultado = this._quoteService.getQoute();
    // recuperar info de seleccion
    if(this.resultado.resultado != undefined){
      console.log('Cotizado...');
      this.opciones = this.traerDatos(this.resultado);
    }else{
      console.log('No hay cotizacion')
    }
  }
  /**
   * Funcion que trae el nombre de la marca y plan seleccinado
   * @param resultado cotizacion realizada desde formulario
   * @returns nombre de la marca y nombre del plan
   */
  traerDatos(resultado:any):any{
    let optionsID:Quote = resultado.opciones; 
    //  Array Destructuring
    let marca = MARCAS.filter(m => m.id === Number(optionsID.marca));
    let plan = PLANES.filter(p => p.id === Number(optionsID.plan));
    return {marca:marca[0]['nombre'],plan:plan[0]['nombre'],year:optionsID.year};
    //console.log(resultado.opciones);
  }
}
