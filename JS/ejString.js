function String(){
	
	let text1 = "holalalalala";
	let text2 = "la";
	let text3 = "x";
	
	console.log(text1.replaceAll(text2,text3));
	
	let posicion;
	let posEmpezar = 0;
	let veces = 0;
	let resultado = text1;
	
	do{
		posicion = text1.indexOf(text2,posEmpezar);
		if(posicion!=-1){
		posEmpezar = text2.length+posicion;
		veces++;
		resultado = resultado.replace(text2,text3);
		}
	}while(posicion>-1);
	
	alert(veces);
	alert(resultado);
	//alert(text1.replaceAll(text2,text3));
}