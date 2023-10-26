export const MARCAS=[
    {id:1,nombre:"Europeo"},
    {id:2,nombre:"Americano"},
    {id:3,nombre:"Asiáico"}
];

const YEARMAX = new Date().getFullYear();
//permite convertir algo a un array 
export const YEARS = Array.from(new Array(20),(valor,index)=>YEARMAX-index); // crear array de 20

export const PLANES = [ 
    {id:1,nombre:"Basico"},
    {id:2,nombre:"Completo"}
];