/*		1)Pedir al usuario cantidad
		2)Crear un desplegable con tantos option como el numero que ha dado
		Elemento 1 ..... Elemento N
		3)Crear tantos RadioButtons como elementos también
		4) Si cambias el valor del radio se cambie el desplegable y vicecersa.*/
		
		function cambiarRadio(){
			console.log("input[value='"+this.value+"']");
			document.querySelector("input[value='"+this.value+"']").checked=true;
		}
		
		function cambiarDesplegable(){
			document.getElementById("desplegable").value = this.value;
		}
		
		window.onload=function(){
			let cantidad;
			do{
				cantidad =+ prompt("Dame la cantidad de opciones");
			}while(isNaN(cantidad) || cantidad == "" || cantidad<1);
			
			let despl = document.createElement("select");
			despl.id="desplegable";
			despl.style.display="block";
			despl.style.marginBottom="20px";
			despl.onchange=cambiarRadio;
			
			document.body.appendChild(despl);//Metemos el desplegable en el body.
			let opt,texto;
			let lab,texto2,inp;
			for(let i = 1;i<=cantidad;i++){
				opt = document.createElement("option");
				opt.value = "valor"+i;
				//opt.setAttribute("value","e"+i);
				texto = document.createTextNode("Elemento "+i);
				opt.appendChild(texto);
				despl.appendChild(opt);
				
				//Creo los radioButton
				lab = document.createElement("label");
				
				texto2 = document.createTextNode("Elemento "+i);
				lab.appendChild(texto2);//Meto el texto dentro del Label
				
				inp = document.createElement("input");
				inp.type="radio";
				//inp.name="radioButton";
				inp.setAttribute("name","radioButton");
				inp.onclick = cambiarDesplegable;
				inp.value="valor"+i;
				lab.appendChild(inp);//Meto el input dentro del label
				document.body.appendChild(lab);//Meto el label dentro del body en el html.
				 
			}
			
			/*let br=document.createElement("br");
			document.body.appendChild(br);
			br=document.createElement("br");
			document.body.appendChild(br);
			br=document.createElement("br");
			document.body.appendChild(br);*/
			
			/*let lab,texto2,inp;
			
			for(let i = 1;i<=cantidad;i++){
				lab = document.createElement("label");
				
				texto2 = document.createTextNode("Elemento "+i);
				lab.appendChild(texto2);//Meto el texto dentro del Label
				
				inp = document.createElement("input");
				inp.type="radio";
				//inp.name="radioButton";
				inp.setAttribute("name","radioButton");
				inp.value="r1";
				lab.appendChild(inp);//Meto el input dentro del label
				document.body.appendChild(lab);//Meto el label dentro del body en el html.
			}*/
			
		}
		
		//<select id='desplegable'>
			//<option value='e1'>Elemento 1</option>
			//<option value='e2'>Elemento 2</option>
			//<option value='e3'>Elemento 3</option>
			//<option value='e4'>Elemento 4</option>
			//<option value='e<cantidad>'>Elemento "cantidad"</option>
		//</select>
		
		//<label>Element 1<input type="radio" name="radioButton" value="r1"></label>
		//<label>Element 2<input type="radio" name="radioButton" value="r1"></label>
		//<label>Element 3<input type="radio" name="radioButton" value="r1"></label>
		//...
		//<label>Element 1<input type="radio" name="radioButton" value="r<cantidad>"></label>