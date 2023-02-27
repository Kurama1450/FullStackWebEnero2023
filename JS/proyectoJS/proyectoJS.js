/*	PRIMERA PARTE)



TABLA DE MULTIPLICAR (TEXT):

CANTIDAD DE FILAS (TEXT):

RADIO PONEIS LOS 4 (TABLA, LISTA, PARRAFOS, DESPLEGABLE)

BOTON SUBMIT



LOCALIZACION: ENCIMA DEL FORMULARIO



VALIDAR:

 TODOS RELLENOS -> VALIDARLO EN EL SUBMIT

 MULTIPLICAR Y FILAS SON NUMEROS -> VALIDAR CON SETCUSTOMVALIDITY

  

 NIVEL PRO) HACER EL FORMULARIO CON EL DOM

  

SEGUNDA PARTE)

SI CAMBIAS EL RADIO AUTOMATICAMENTE TAMBIEN SE CAMBIE A LA NUEVA ESTRUCTURA



TERCERA PARTE)

UN BOTON AÑADIR. AÑADA 1 NUEVO A LA ESTRUCTURA.*/

		
	
	/*function hacerEstructuraBasica(menor,mayor,item1,item2,item3,item4){
		document.write(item1);
		for(let i=1;i<=mayor;i++)
			document.write(item2+menor+"x"+i+"="+(menor*i)+item3);
		document.write(item4);		
	}*/
	
	function cambiarEstructura(){
		
		let f = document.formu;
		let tablaM = f.tabla.value;
		let cantidad = f.cantidad.value;
		
		if(this.id=="tabla")
			hacerLista(tablaM,cantidad);
		else if(this.id == "lista")
			hacerDesplegable(tablaM,cantidad);
		else if(this.id="desplegable")
			hacerParrafo(tablaM,cantidad);
		else
			hacerTabla(TablaM,cantidad);
		
		this.parentNode.removeChild(this);
	}
	
	function hacerLista(tablaMulti,row){
		let lista = document.createElement("ul");//Acabo de crear la etiqueta ul
		lista.id="lista";
		lista.onclick = cambiarEstructura;
		let elemento,texto;
		for(let i = 1; i<=row;i++){
			let elemento = document.createElement("li");
			texto = document.createTextNode(tablaMulti+"x"+i+"="+(tablaMulti*i));
			elemento.appendChild(texto);
			lista.appendChild(elemento);//Metemos en el ul.
		}
		let formulario = document.formu;
		document.body.insertBefore(lista,formulario);
	}
	
	function hacerParrafo(tablaMulti,row){
		let parra = document.createElement("div");
		parra.id="parrafos";
		parra.onclick = cambiarEstructura;
		parra.style.border="1px solid black";
		let elemento,texto;
		for(let i = 1; i<=row;i++){
			let elemento = document.createElement("p");
			texto = document.createTextNode(tablaMulti+"x"+i+"="+(tablaMulti*i));
			elemento.appendChild(texto);
			parra.appendChild(elemento);
		}
		let formulario = document.formu;
		document.body.insertBefore(parra,formulario);
	}
	
	function hacerDesplegable(tablaMulti,row){
		let sele = document.createElement("select");
		sele.id = "desplegable";
		sele.onchange = cambiarEstructura;
		let elemento,texto;
		for(let i = 1; i<=row;i++){
			let elemento = document.createElement("option");
			elemento.value="opcion"+i;
			texto = document.createTextNode(tablaMulti+"x"+i+"="+(tablaMulti*i));
			elemento.appendChild(texto);
			sele.appendChild(elemento);
		}
		let formulario = document.formu;
		document.body.insertBefore(sele,formulario);
	}
	
	function hacerCelda(row,cadena){
				let celda,texto;
				celda = document.createElement("td");
				celda.style.border="1px solid black";
				texto=document.createTextNode(menor+"x"+i);
				celda.appendChild(texto);
				row.appendChild(celda);
				}
	
	function hacerTabla(tablaMulti,row){
		let tabla = document.createElement("table");
		tabla.id="tabla";
		tabla.onclick = cambiarEstructura;
		tabla.style.border = "1px solid black";
		tabla.style.borderCollapse = "collapse";
		let fila;
		
		for(let i=1;i<=row;i++)
			
			{
				fila = document.createElement("tr");
				
				hacerCelda(fila,tablaMulti+"x"+i);
				hacerCelda(fila,"=");
				hacerCelda(fila,tablaMulti*i);
				tabla.appendChild(fila);
				
			}
		let formulario = document.formu;			
		document.body.insertBefore(tabla,formulario);
	}
	
	function menu(){
		let f = document.formu;
		let opcionElegida,modo;
			modo=f.estructura.value;
			let tabla,filas;
			if(modo!="SALIR"){
				tabla=f.tabla.value;
				filas=f.cantidad.value;
			}
			
			switch(modo){ 
				case "LISTA":
								hacerLista(tabla,filas);
								//hacerEstructuraBasica(tabla,filas,"<ul>","<li>","</li>","</ul>");
								break;
				case "PARRAFOS":
								hacerParrafo(tabla,filas);
								//hacerEstructuraBasica(tabla,filas,"<div style='border:1px solid black;'>","<p>","</p>","</div>");
								break;		
				case "TABLA":
								hacerTabla(tabla,filas);
								break;
				case "DESPLEGABLE":
								hacerDesplegable(tabla,filas);
								//hacerEstructuraBasica(tabla,filas,"<select>","<option>","</option>","</select>");
								break;	
				case "SALIR":
								alert("Hasta luego");
			}
		}			
	
	function validar(){
		let f = document.formu;
		if(f.tabla.value == ""){
			alert("Error el campo de la tabla debe rellenarse");
			return false;
		}
		
		if(f.cantidad.value == ""){
			alert("Error el campo de la cantidad debe rellenarse");
			return false;
		}
		
		if(f.estructura.value == ""){
			alert("Error debe marcar una estructura");
			return false;
		}
		
		menu();
		event.preventDefault();
	}
	
	function validarNumeros(nodo,campo){
		if(isNaN(nodo.value) || nodo.value<1 || nodo.value>10){
			nodo.setCustomValidity("Error el campo "+campo+" debe ser numérico");
		}
		else 
			nodo.setCustomValidity("");
	}
	
	window.onload=function(){
		let f = document.formu;
		f.onsubmit=validar;
		f.tabla.oninput=function(){
			validarNumeros(this,"tabla");
		};
		f.cantidad.addEventListener("blur",function(){
			validarNumeros(this,"cantidad");
		});
	}
	
	