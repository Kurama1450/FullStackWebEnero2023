'use strict';
//1)PIDE UN STRING AL USUARIO
//2)DI CUANTAS VOCALES TIENE ESE
//3)DEVUELVE LA CADENA INVERTIDA

let palabra = prompt("Escriba una palabra: ");

let contador = 0;

let cadenaInver = "";

for(let i = 0; i<palabra.length;i++){
	
	if(palabra.charAt(i).toLowerCase() == "a" || palabra.charAt(i).toLowerCase() == "e"
	|| palabra.charAt(i).toLowerCase() == "i" || palabra.charAt(i).toLowerCase() == "o"
	|| palabra.charAt(i).toLowerCase() == "u"){
		contador = contador + 1;
		cadenaInver = palabra.charAt(i)+cadenaInver;
	}
}

alert("Cantidad de vocales es: " + contador + "\nCadena al reves: "+cadenaInver);

let num;
do{
	num=+prompt("Dame un numero");
	
	if(isNan(num)){
		alert("Esto no es un numero");
	}
		
}while(isNaN(num));


	