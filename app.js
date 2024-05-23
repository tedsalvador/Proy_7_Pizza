import { nombre1 } from "./js/ex1.js";
import { sumaDosNumeros } from "./js/ex2.js";
import { printTerminal } from "./js/printData.js";
import { buscarCadenaEn } from "./js/findcadena.js";

let numIngresado1 = 3;
let numIngresado2 = 5;
let cadena1 = "ENglISH";
let cadena2 = "sdsEnglishdsd";
function app(){
    //console.log{"el nombre es :" + nombre1};
    printTerminal(nombre1)
    printTerminal(sumaDosNumeros(numIngresado1,numIngresado2))
    printTerminal("¿Existe Cadena Buscada? " + buscarCadenaEn(cadena1, cadena2))
}

app()