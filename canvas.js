let tamaño = document.querySelector("canvas");
function dibujarCanvas(){
    tablero.lineWidth = 8;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5FC"; //color
    tablero.strokeStyle = "#07aeea"; //"#0A387" "#07aeea"
    tablero.fillRect(0,0,1200,869);
    tablero.beginPath();
    //tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#07aeea"; //color

    tablero.strokeStyle = "#0A3871"; //"#8A3871"

    let ancho = 600/palabraSecreta.length;

    for (let i = 0; i < palabraSecreta.length; i++) {
        tablero.moveTo(500 + (ancho*i),640);
        tablero.lineTo(550 + (ancho*i),640);
    }
    tablero.stroke();
    tablero.closePath();

}

function  dibujarLetraCorrecta(index){
    tablero.font = 'bold 63px arial';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "black"; //color

    let ancho = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],505+(ancho*index),620);
    tablero.stroke();
}

function dibujarLetraIncorrecta(letra, errorizquierdo){
    tablero.font = 'bold 40px arial';
    tablero.lineWidth = 6;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "red"; //color
    tablero.fillText(letra,535+(40*(10-errorizquierdo)),710,40);
}

function limpiarCavas(){
    canvas.clearRect(0,0,canvas.width,canvas.height);
}

function dibujarMunheco(errores){
    if(errores==7){
        tablero.fillStyle = "red";
        tablero.beginPath();
        //tablero.moveTo(775,300);
        tablero.arc(775,300,20,0,2*Math.PI); //cabeza
        tablero.stroke();
        tablero.closePath();
    }else if (errores==6){
        tablero.fillStyle = "red";
        tablero.beginPath();
        tablero.moveTo(775,320);
        tablero.lineTo(775,400); 
        tablero.stroke();
        tablero.closePath();
    }else if(errores==5){
        tablero.fillStyle = "red";
        tablero.beginPath();
        tablero.moveTo(775,400);
        tablero.lineTo(745,430); 
        tablero.stroke();
        tablero.closePath();
    }else if(errores==4){
        tablero.fillStyle = "red";
        tablero.beginPath();
        tablero.moveTo(775,400);
        tablero.lineTo(805,430); 
        tablero.stroke();
        tablero.closePath();
    }else if(errores==3){
        tablero.fillStyle = "red";
        tablero.beginPath();
        tablero.moveTo(775,360);
        tablero.lineTo(755,340); 
        tablero.stroke();
        tablero.closePath();
    }else if(errores==2){
        tablero.fillStyle = "red";
        tablero.beginPath();
        tablero.moveTo(775,360);
        tablero.lineTo(795,340); 
        tablero.stroke();
        tablero.closePath();
    }else if(errores==1){
        tablero.beginPath();
        tablero.lineWidth = 4;
        tablero.moveTo(767,292);
        tablero.lineTo(770,295); 
        tablero.moveTo(770,292);
        tablero.lineTo(767,295);
        tablero.stroke();
        tablero.closePath();
    }
    else if(errores==0){
        tablero.beginPath();
        tablero.lineWidth = 4;
        tablero.moveTo(779,292);
        tablero.lineTo(782,295); 
        tablero.moveTo(782,292);
        tablero.lineTo(779,295);
        tablero.stroke();
        tablero.closePath();
        //location.reload();
        limpiarCavas();
    }
}