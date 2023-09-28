var listV = [2,3,5,10];
var listF = [];

function esDivisible(num){

    for(var i=0;i<listV.length;i++){
        
        if((num%(listV[i]))!=0){
            console.log("aqui");
            listF.push(listV[i]);
            
            listV.splice(i,1);
        }
    }
    if(listV.length!=0){
        console.log("El número "+num+" es divisible entre "+listV);
    }
    if(listF.length!=0){
        console.log("El número "+num+" no es divisible entre "+listF);
    }
}
esDivisible(prompt("Inserte un número"));