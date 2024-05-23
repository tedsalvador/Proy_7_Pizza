//dada una cadena a buscar (find) y otra en la cual buscar
/* funcion que reciba la cadena a buscar y use la cadena donde bucar y no diga SI la encuentra o NO*/
// controlar que ambas este en mismo tipo de letra mayusculas o minisculas

export function buscarCadenaEn(strFind, strComplete){
    let resultadoSioNo = "False";
    let strFindUpperCase = strFind.toUpperCase();
    let strCompleteUpperCase = strComplete.toUpperCase();

    resultadoSioNo = strCompleteUpperCase.includes(strFindUpperCase);
    //console.log("¿valido? "+ resultadoSioNo);
    return resultadoSioNo;
}