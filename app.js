
/*import { existenIngredientes, mezclaringredientes, dejarreposar} from "./js/prepararpizza.js";*/

let numIngresado1 = 3;

function app(){
    printTerminal(existenIngredientes("Peperoni"));
    printTerminal(mezclaringredientes("true"));
    dejarreposar();
}

app()

function printTerminal(data){
    console.log(data);
}

function printBrowser(element, data){
    element.innerHtml=data;
}

function mezclaringredientes(preparar){    
    //preparacion generica
    let pizzapreparada = "False";
    let ingredientesOK = "True";
    let mensaje="--"
    //si existen todos los ingresientes (sabor) resultado TRUE, sino FALSE    
    mensaje="Masa de Pizza Preparada - " + ingredientesOK;
    return mensaje;
}

function existenIngredientes(tipopizza){
    //segun tipo de pizza utiliza ingredientes
    //preparacion generica
    let ingredientes = "False";    
    let mensaje="--"
    //si existen todos los ingresientes (sabor) resultado TRUE, sino FALSE    
    mensaje="Ingredientes Completos - Se va preparar pizza sabor : " + tipopizza;
    return mensaje;
}

function dejarreposar(){
    let mensaje="--"
    console.log("base para 1 pizza");
    console.log("dejar la base para 1 pizza reposar durante 45 minutos");    
    console.log("base con forma circular obtenida");
    return mensaje;
}