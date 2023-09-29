function numeroValido(num){

    while(num!=parseInt(num)){
        console.error("Número no valido");
        num=parseInt(prompt("Inserte un número"));
    }
    return num;
}

function operación(operador,numero1,numero2){
    var fin=false;
    while (!fin){
        switch(operador){
            case"+":(numero1+=numero2);break;
            case"-":(numero1-=numero2);break;
            case"*":(numero1*=numero2);break;
            case"/":(numero1/=numero2);break;
            case"FIN":fin=true;break;
        }
        if(!fin){
            operador=prompt("Inserte el operador");
            if (operador=="FIN"){
                fin=true;
            }
            if(!fin){
                numero2=numeroValido(parseInt(prompt("Inserte otro número")));
            }
        }
        
    }
    return numero1;
}

var numero1 = numeroValido(parseInt(prompt("Inserte un número")));
var operador = prompt("Inserte el operador");
var numero2 = numeroValido(parseInt(prompt("Inserte otro número")));


console.log(operación(operador,numero1,numero2));