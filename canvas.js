let tamaño = document.querySelector("canvas");
let conteoPalabras = 0;
let terminado; //variable de estado del juego;

function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5FC"; //color
    tablero.strokeStyle = "#F3F5FC"; //"#0A387" "#07aeea" //#F3F5FC
    tablero.fillRect(0,0,1200,600);
    tablero.beginPath();
    tablero.moveTo(450,300);
    tablero.lineTo(750,300);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#07aeea"; //color
    tablero.strokeStyle = "#0A3871"; //"#8A3871" #0A3871

    let ancho = 600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(330 + (ancho*i),420);
        tablero.lineTo(380 + (ancho*i),420);
    }
    tablero.stroke();
    tablero.closePath();
}

function  dibujarLetraCorrecta(index){
    conteoPalabras+=1;
    tablero.font = 'bold 63px arial';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "black"; //color

    let ancho = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],332+(ancho*index),410);
    tablero.stroke();
    //console.log(letras);
    if(letrasCorrectas.length==palabraSecreta.length){
        //console.log("ganaste");
        document.getElementById("titulo-final").innerText="¡Ganaste!";
        document.getElementById("titulo-final").style.display="inline";
        tablero.fillStyle="#93d2f7";
        terminado=true;
    }
}

function dibujarLetraIncorrecta(letra, errorizquierdo){
    if(terminado==false){
        tablero.font = 'bold 40px arial';
        tablero.lineWidth = 6;
        tablero.lineCap = "round";
        tablero.lineJoin = "round";
        tablero.fillStyle = "gray"; //color
        tablero.fillText(letra,330+(40*(10-errorizquierdo)),510,40);
    }
}

function limpiarCanvas(){ //Se limpia el dibujo
    tablero.clearRect(0,0,1200,600);
}

function dibujarMunheco(){
    if(terminado==false){
        switch (errores) {
            case 7:
                tablero.beginPath();
                tablero.moveTo(530,300);
                tablero.lineTo(530,20);
                tablero.stroke();
                tablero.closePath();
                break;
            case 6:
                tablero.beginPath();
                tablero.moveTo(530,20);
                tablero.lineTo(690,20);
                tablero.moveTo(690,20);
                tablero.lineTo(690,40);
                tablero.stroke();
                tablero.closePath();
                break;
            case 5:

                tablero.beginPath();
                tablero.arc(690,120,80,Math.PI,-Math.PI/2); //cabeza
                tablero.stroke();
                tablero.closePath();

                tablero.beginPath();
                tablero.moveTo(610,120);
                tablero.lineTo(610,180); 
                tablero.stroke();
                tablero.closePath();

                tablero.beginPath();
                tablero.arc(690,80,40,-Math.PI/2,0);
                tablero.stroke();
                tablero.closePath();
                break;

            case 4:
                tablero.beginPath();
                tablero.arc(716,80,14,0,-Math.PI);
                tablero.stroke();
                tablero.closePath();
                tablero.beginPath();
                tablero.moveTo(702,80);
                tablero.lineTo(700,60); 
                tablero.stroke();
                tablero.closePath();

                tablero.beginPath();
                tablero.moveTo(610,180);
                tablero.lineTo(685,180); 
                tablero.stroke();
                tablero.closePath();
                break;
            case 3:
                tablero.beginPath();
                tablero.moveTo(685,180);
                tablero.lineTo(685,120); 
                tablero.stroke();
                tablero.closePath();
                
                tablero.beginPath();
                tablero.arc(712,120,27,Math.PI,-Math.PI/2);
                tablero.stroke();
                tablero.closePath();
                break;
            case 2:
                tablero.beginPath();
                tablero.moveTo(625,110);
                tablero.lineTo(645,150); 
                tablero.stroke();
                tablero.closePath();
                break;
            case 1:
                tablero.beginPath();
                tablero.moveTo(687,110);
                tablero.lineTo(706,140); 
                tablero.stroke();
                tablero.closePath();
                break;
            case 0:
                tablero.beginPath();
                tablero.moveTo(711,70);
                tablero.lineTo(719,78); 
                tablero.stroke();
                tablero.closePath();

                tablero.beginPath();
                tablero.moveTo(711,78);
                tablero.lineTo(719,70); 
                tablero.stroke();
                tablero.closePath();

                document.getElementById("titulo-final").style.display="inline";
                terminado=true;
                errores=8;
                contado=8;
                break;
        }
    }
}