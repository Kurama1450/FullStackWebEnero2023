function ejercicio1(producto="Producto genérico",precio=100,impuesto=21)

 {

	 console.log("-----------EMPIEZA-----------");

	 let nombre=producto+"";

	 let price=+precio;

	 let tax=+impuesto;

	  

	 if(isNaN(price) || isNaN(tax) || price<0 || tax<0){

		 console.error("El precio y/o el impuesto son incorrectos");

		 return -1;

	 }

	 else

		 //console.log("El producto "+nombre+" tiene un precio de:"+(price+(impuesto*price/100)));

		 return price+(impuesto*price/100);

	  

	 console.log("-----------ACABA-----------");

	 	  

 }

  

 let x=ejercicio1();

 console.log(ejercicio1("X"));

 console.log(ejercicio1("X",500));

 console.log(ejercicio1("X",500,10));

 console.log(ejercicio1(8,"jajaja"));

 console.log(ejercicio1(10,90,"jejeje"));

 console.log(ejercicio1("PERA",90,5,90,"OTRO",true));


