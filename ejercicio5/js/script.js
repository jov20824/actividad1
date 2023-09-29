const listaUsuarios = ["Luis","Pablo","Pedro","Sergio","Lydia"];
const listaContraseñas = ["123","456","789","000","001"];
var indiceUsuario;
var intentos=0;
function usuarioCorrecto(usuario){
    var correcto=false;
    listaUsuarios.forEach(function (entry) {
        if (usuario==entry){
            correcto=true;
            indiceUsuario=listaUsuarios.indexOf(entry);
        }
    })
    if (!correcto){
        intentos++;
        if (intentos>=5){
            alert("Intentos agotados");
        }else{
        console.log("Usuario no identificado");
        usuarioCorrecto(prompt("Escriba su nombre de usuario"));
        }
    }
}
function contraseñaCorrecta(contraseña){
    let confirmacion=false;

    while(!confirmacion){
        if (contraseña==(listaContraseñas[indiceUsuario])){
            console.log("El usuario y la contraseña son correctas");
            confirmacion=true;
        }else{
            intentos++;
            if (intentos>=5){
                alert("Intentos agotados");
            }else{
            console.log("Contraseña incorrecta");
            contraseña=prompt("Introducir contraseña");
            }
        }
    }
    
}
usuarioCorrecto(prompt("Introduzca su nombre de usuario"));
if (intentos<5){
    contraseñaCorrecta(prompt("Introduzca su contraseña"));
}



