import { Injectable } from '@angular/core';
import { Quote } from '../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class OptionsQuoteService {
  ///
  opcionesCotizacion:Quote;
  cotizacion:any;
  
  ///
  constructor() {
    this.opcionesCotizacion = new Quote();
    
   }
   
   ///
   /**
    * Funcion que permite llenar el objeto
    * con las opciones para realizar el calculo 
    * del presupuesto
    * @param options opciones a evaluar
    */
   addOptionsQoute(options:any){
    this.opcionesCotizacion = options;
   }
   
   /**
    * Funcion que permite obtener las 
    * opciones del presupuesto, seleccionadas por el ususario 
    * @returns objeto quoute con las opciones a evaluar
    */
   getOptionsQoute():Quote{
    return this.opcionesCotizacion;
   }
   
   /**
    * Funcion que realiza la cotizacion
    */
   qoute(){
    //base del seguro
    let resultado = 2000;
    //obtener dif de año
    const difer = this.obtenerDiferenciaYear(this.opcionesCotizacion.year);
    // restar 3% por cada año
    resultado -= ((difer*3)*resultado)/100;
    //Europeo 30%
    //Americano 15%
    //Asiatico 5%
    resultado *= this.calcularMarca(this.opcionesCotizacion.marca);
    //Básico 20%
    //Completo 50%
    resultado *= this.calcularPlan(this.opcionesCotizacion.plan);
    //Formatear Dinero
    resultado = this.formaterDinero(resultado);
    this.cotizacion = resultado;
    return resultado;
   }
   
   /**
    * Funcion para obtener el valor de
    * la cotizacion.
    * @returns resultado de la cotizacion
    */
   getQoute(){
    return {opciones:this.opcionesCotizacion,resultado:this.cotizacion};
   }
   
   /**
    * Funcion que calcula la cantidad de años 
    * de diferencia entre el seleccinado y el año actual
    * @param year año seleccionado
    * @returns diferencia entre el año actual y el seleccinado
    */
   obtenerDiferenciaYear(year:any){
    return new Date().getFullYear() - year;
   }
  
   /**
    * Funcion para calcular el incremento que depende de la
    * marca seleccinada por el cliente
    * @param marca marca seleccionada por el usuario
    * @returns incremento segun la marca seleccinada
    */
   calcularMarca(marca:any):any{
    let incremento;
    switch (marca) {
      case "1":
        incremento = 1.30; // +30%
        break;
      case "2":
        incremento = 1.15; // +15%
        break;
      case "3":
        incremento = 1.05; // +5%
        break;
      default:
        break;
    }
    return incremento;
   }

   calcularPlan(plan:any){
    // solo tengo dos pplanes, por lo tanto...
    return plan == "1" ? 1.2 : 1.5;
   }

   formaterDinero(amount:any){
    return amount.toLocaleString('en-US',{
      style:'currency',
      currency:'USD'
    })
   }
}
