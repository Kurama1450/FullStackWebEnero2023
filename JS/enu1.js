'use strict';

let x = "Escriba un numero entero: ";

let num1 = prompt(x);

let num2 = prompt("Escriba un numero entero: ");

let mayor;

if(num1>num2){
	alert(num1+" es mayor que " +num2);
	mayor = num1;
}
else if (num1<num2){
	alert(num1+"es menor que " +num2);
	mayor=num2;
}		
else{
	alert("Ambos numeros son iguales");
	mayor=num1;
}	

for(let i = 1; i < mayor; i++ ){
	let p = prompt("Dame el texto del parrafo "+i);
	document.write("<p>"+p+"</p>");
}

