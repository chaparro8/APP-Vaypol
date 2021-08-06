console.log("chapa");

document.write("<h1>Estamos en vivo</h1>");

function escribirNombre(nombre) {
    console.log(nombre)
    document.write(nombre)
};

/* escribirNombre("<h1>Adrian</h1>");

function fecha() {
    let hoy = new Date()
    document.write(hoy)
    
}

fecha(); */

var objFecha = new Date();
var dia  = objFecha.getDate();
var mes  = objFecha.getMonth();
var anio = objFecha.getFullYear();

document.write(dia );
document.write('<h1>wachin</h1>');
document.write(dia+25);
document.write(mes);
document.write(anio);
console.log(dia);
console.log(mes);
console.log(anio);

var garantia = prompt();
console.log(garantia);


var cadena= "cadena";
var fstChar = cadena.charAt(0);
console.log(fstChar);