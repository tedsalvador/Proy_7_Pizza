
import { printTerminal} from "./js/printData.js";
import { existenIngredientes, mezclaringredientes, dejarreposar} from "./js/prepararpizza.js";

let numIngresado1 = 3;

function app(){
    printTerminal(existenIngredientes("Peperoni"));
    printTerminal(mezclaringredientes("true"));
    dejarreposar();
}

app()
