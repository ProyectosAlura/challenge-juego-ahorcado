//Selectores
let palabras =["ALURA","ORACLE","ONE","JAVASCRIPT","HTML"];
//let palabras = [];
let tablero = document.getElementById("lienzo").getContext("2d");
let canvas = document.getElementById("lienzo");
let palabraSecreta = "";
let contadorPalabras=0;
let letras = []; //guardar las letras ingresadas
let errores = 8;
// Numero de 0 a 4 console.log(Math.floor(Math.random()*palabras.length)); 

function mostrarCampos(){
    document.querySelector(".container-palabra-nueva").style.display="block";
    document.querySelector(".campos-inicio").style.display="none";
}

function ocultarCampos(){
    document.querySelector(".container-palabra-nueva").style.display="none";
    document.querySelector(".campos-inicio").style.display="block";
}


function agregar(){
    let campo = document.querySelector("input");
    console.log(campo.value.toLocaleUpperCase());
    palabras.push(campo.value.toLocaleUpperCase());
    ocultarCampos();
    campo.value="";
}

function seleccionarPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

function comprobarLetras(key){
    let estado = false;
    //entre 65 y 90 estan todas las letras entre 65 y 90 -- codigo ascii
    // index of -> busca la primera ocurrencia de un arreglo. 
    if(key>=65 && letras.indexOf(key)|| key <= 90 && letras.indexOf(key)){
        letras.push(key);
        console.log(key);
        console.log(contadorPalabras);
        contadorPalabras+=1;
        return estado;
    }else{
        estado=true;
        console.log(key);
        return estado;
    }
}

function anhadirLetraIncorrecta(){
    errores-=1;
    console.log(errores);
    dibujarMunheco(errores);
}

function iniciarJuego(){
    //document.getElementById("iniciar-juego").style.display="none";
    //document.getElementById("nueva-palabra").style.display="none";
    //document.querySelector(".campos-inicio").style.display="none";
    document.getElementById("clase-canvas").style.display="block";
    seleccionarPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();

    document.onkeydown = (e)=>{
        let letra = e.key.toUpperCase(); //se obtiene el evento y se deja en mayuscula
        
        if(comprobarLetras(letra) && palabraSecreta.includes(letra)){
            for(let i=0; i < palabraSecreta.length;i++){
                if(palabraSecreta[i]===letra){
                    dibujarLetraCorrecta(i);
                }
            }
        }else{
            anhadirLetraIncorrecta(letra);
            dibujarLetraIncorrecta(letra,errores);
        }
    }
}


