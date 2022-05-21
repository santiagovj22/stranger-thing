var img = document.getElementById("letras");

document.addEventListener("keydown", teclado);
document.addEventListener("keyup", reset);

function teclado(evento) {
    var codigo = evento.keyCode;
    if(codigo > 64 && codigo < 91) {
        img.src="imagenes/letra"+codigo+".png";
    }
}

function reset(evento) {
    img.src= "imagenes/letra0.png"
}