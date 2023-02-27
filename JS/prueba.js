'use strict';
console.log("HOLA QUE TAL");
//console.error("ALGO HA FALLADO");
// alert("HOLA");
let numero = prompt("Dame un numero:");

alert("El numero que has escrito es: " +numero);

for(let i=0;i<2;i++){
	if(i%2==0)
		document.write("<p>HOLA</p>");
	else 
		document.write("<p>PARRAFO IMPAR</p>");
}

let nota = new Array(20);
