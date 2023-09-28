function ordenPositivo (n1,n2,n3,n4){
    


    if(n1<n2 && n2<n3 && n3<n4){
        console.log("El orden es estrictamente creciente");
    }
    else{
        console.error("El orden no es estrictamente creciente");
    }
}

var lista = [];

for(var i=0;i<4;i++){
    lista[i] = parseInt(prompt("Introducir numero"));
    console.log(lista);
}


ordenPositivo(lista[0],lista[1],lista[2],lista[3]);