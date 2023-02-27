function Array(){
	let num = new Array(9,14,50,69);//Crea un array con 4 elementos numéricos
	
	num.push(96,114);//Concatena 2 elementos más al final y 2 al principio (unshift y push)
	console.log(num);
	
	num.unshift(4,5);//Concatena 2 elementos más al final y 2 al principio (unshift y push)
	console.log(num.join("==>"));
	
	num.splice(3,5);//Elimina las posiciones de la 3 a la 5 (incluida) (splice)
	console.log(num.join("==>"));
	
	num.splice(num.length-1,0,80,80);//Inserta 2 elementos más entre el penúltimo y el último (splice)
	console.log(num.join("==>"));
	
	num.reverse();//Invierte el array (reverse)
	console.log(num.join("==>"));
	
	num.sort();//Muestra el array ordenado (sort)
	console.log(num.join("==>"));
}