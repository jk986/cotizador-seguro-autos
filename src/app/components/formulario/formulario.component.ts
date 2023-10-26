import { Component, OnInit, EventEmitter , Output } from '@angular/core';
import { MARCAS } from 'src/app/constants/Marcas';
import { YEARS } from 'src/app/constants/Marcas';
import { PLANES } from 'src/app/constants/Marcas';
import { Quote } from '../../models/Quote';
import { OptionsQuoteService } from 'src/app/services/options-quote.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  
})
export class FormularioComponent implements OnInit{
  ///
  public marcas!:Array<any>; //asi le indico que no puedo inicializarlo ahora
  public years!:Array<any>;
  public planes!:Array<any>;
  public quote:Quote;
  public mensajeError:any;
  @Output() cargando = new EventEmitter(); // para el spiner
  public resultadoCotizacion:any;
  ///
  constructor(private _optionsQouteService:OptionsQuoteService ){
    this.quote = new Quote(); // opciones a cotizar
  }
  ///
  ngOnInit(): void {
    this.marcas = [...MARCAS.map(marca=>marca)];
    this.years = [...YEARS];
    this.planes = [...PLANES.map(plan=>plan)];
  }
  
  onSubmit(ev:any){
    ev.preventDefault();
    //validacion
    this.validarFirmualrio(this.quote);
    setTimeout(() => {
      this.cargando.emit(false)
    }, 800);

  }

  validarFirmualrio(data:Quote):boolean{
    this.cargando.emit(true);
    if(Object.values(data).includes('')){
      this.mensajeError = 'Todos los campos son obligatorios';
      return false;
    }else{
      this._optionsQouteService.addOptionsQoute(data);
      this.mensajeError = null;
      this.resultadoCotizacion = this._optionsQouteService.qoute();
      return true;
    }
  }

}
