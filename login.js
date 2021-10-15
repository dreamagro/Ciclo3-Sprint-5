let registros = [];

let persona = new Object();
    persona.correo = "juan@gmail.com";
    persona.contrasena = "SecurePassword123";
    registros.push(persona); 

function agregarRegistro(){
    let persona = new Object();
    persona.correo = document.getElementById("correo").value;
    persona.contrasena = document.getElementById("contrasena").value;
    registros.push(persona);
    return registros;
}

function login(){

    correoU = document.getElementById("correo").value;
    contrasenaU = document.getElementById("contrasena").value;

    for(let i=0; i<registros.length; i++){
        if(registros[i].correo == correoU){
            if(registros[i].contrasena == contrasenaU){
                registros = [];
                return true;
            }
        }
    }

    return false;
}

function validarCAPTCHA(valor){
    if( Number(valor) == 1000 ) return true;
    else return false;
}

module.exports={registros, login, validarCAPTCHA, agregarRegistro};