var esPositivo = false;
var esEntero = false;
var numero = NaN;

function positivo(num){
    if (num>0){
        esPositivo = true;
    }
    else{
        console.error("El número dado es negativo");
    }
    return esPositivo;
}
function entero(num){
    if (num==parseInt(num)){
        esEntero=true;
    }
    else{
        console.error("El número dado es decimal");
    }
    return esEntero;
}

function sumatorio(num){
    var sumatorio=0;
    for (var i=0;i<=num;i++){
        sumatorio +=i;
    }
    console.log("El sumatorio de "+num+" = "+sumatorio);
}

while (!esPositivo | !esEntero){
    var numero = prompt("Escriba un número");
    positivo(numero);
    entero(numero);
}
sumatorio(numero);



