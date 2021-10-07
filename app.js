function entrada(){
    return prompt("Nombre una criptomoneda que conozca");
}
function procesamiento(valor){
    return "Usted conoce"+valor
}
function salida(valor){
    alert(valor);
}
salida(procesamiento(entrada()));
