//Selectores
let palabras =["ALURA","ORACLE","ONE","JAVASCRIPT","HTML"];
let tablero = document.getElementById("lienzo").getContext("2d");
let palabraSecreta = "";
let letras = []; //guardar las letras ingresadas
let letrasCorrectas = [];
let errores = 8;

//Funcion de desistir
function desistir(){
    document.querySelector(".campos-inicio").style.display="block";
    document.getElementById("clase-canvas").style.display="none";
    document.getElementById("titulo-final").style.display="none";
    terminado=true;
    errores=8;
}

function mostrarCampos(){
    document.querySelector(".container-palabra-nueva").style.display="block";
    document.querySelector(".campos-inicio").style.display="none";
}

function ocultarCampos(){
    document.querySelector(".container-palabra-nueva").style.display="none";
    document.querySelector(".campos-inicio").style.display="block";
}

function agregarPalabra(){
    let existen_numeros = false;
    let campo = document.querySelector("input"); //Verificar si hay numeros
    for (let index = 0; index < campo.value.length; index++) {
        console.log(campo.value[0]);
        if(!isNaN(campo.value[index])){
            existen_numeros=true;
        }
    }

    if(existen_numeros==false){
        if(campo.value.length<=8){
            palabras.push(campo.value.toLocaleUpperCase()); //se agrega a las palabras
            ocultarCampos();
            campo.value="";
        }else{
            alert("Error, maximo 8 letras");
            campo.value="";
        }
    }else{
        alert("Error,Solo se aceptan letras");
    }
}

function seleccionarPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra; //se selecciona palabra al azar
}

function comprobarLetras(key){
    let estado = false;
    //entre 65 y 90 estan todas las letras entre 65 y 90 -- codigo ascii
    // index of -> busca la primera ocurrencia de un arreglo. 
    if(key.length==1 && (key.charCodeAt(0)>=65 && key.charCodeAt(0)<=90)){ // se verific que cumpla el rango y que solo tenga una letra
        letras.push(key);
        estado=true;
        return estado;
    }else{
        estado= false;
        return estado;
    }
}

function anhadirLetraIncorrecta(){ //funcion para conteo de errores
    if(terminado==true){
        errores=8;
    }else{
        errores-=1;
    }
    //console.log(errores);
    dibujarMunheco(); //Se dibuja la parte del muñeco.
}


function comprobarLetrarepetida(k){
    let state = true;
    for (let index = 0; index < letras.length; index++) {
        if(letrasCorrectas[index]== k){
            state = false;
        }
    }
    return state;
}

function iniciarJuego(){
    document.querySelector(".campos-inicio").style.display="none";
    document.getElementById("titulo-final").innerText="¡Ahorcado!";
    letras.length=0;
    letrasCorrectas.length=0;
    errores=8;
    conteoPalabras=0;
    document.getElementById("titulo-final").style.display="none";
    terminado=false;

    document.getElementById("titulo-final").style.display="none";
    document.getElementById("clase-canvas").style.display="block";
    seleccionarPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();

        document.onkeydown = (e)=>{
            let letra = e.key.toUpperCase(); //se obtiene el evento y se deja en mayuscula
            console.log("letra seleccionada",letra);
            if(comprobarLetras(letra) ){ //Se comprueba que la letra este en el rango.
                console.log(letras);
                if(palabraSecreta.includes(letra)){
                    if(comprobarLetrarepetida(letra)){
                        for(let i=0; i < palabraSecreta.length;i++){ //Se recorre el numero de palabras
                            console.log("item palabra sectreta",palabraSecreta[i]);
                            if(palabraSecreta[i]===letra){
                                letrasCorrectas.push(letra);
                                dibujarLetraCorrecta(i);
                            }
                        }
                    }
                }else{
                    console.log(errores);
                    anhadirLetraIncorrecta(letra);
                    console.log("error",errores);
                    dibujarLetraIncorrecta(letra,errores);
                }
            }
        }
    }


