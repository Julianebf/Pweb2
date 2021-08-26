
const screen = document.querySelector(".screen");

let docBody = document.getElementsByTagName("body")[0];
	docBody.onkeydown = (e)=>{
	
const pegarValor = function(valor){
 	apresentar(valor);
} 


const apresentar = function(valor){

	if(valor == "." && screen.innerText.indexOf(valor) != -1 ){
		return;
	}

	if(operando){
		operando = false;
		
		if(valor == "."){
			screen.innerText = "0";
			screen.innerText += valor;
		}else{
			screen.innerText = "";
			screen.innerText += valor;
		}
	}else{
		if(valor == "." && screen.innerText == "0"){
				screen.innerText = "0";
				screen.innerText += valor;
		}else if(screen.innerText == "0"){
			screen.innerText = "";
			screen.innerText += valor;
		}else{
			screen.innerText += valor;
		}
	}
	
}

const calcular = function(valorAntigo, operador, valorAtual){
	if(operador == soma){
		operadorAntigo = "";
		return antigo+atual;
	}else if(operador == subtracao){
		operadorAntigo = "";
		return antigo-atual;
	}else if(operador == divisao){
		operadorAntigo = "";
		return antigo/atual;
	}else if(operador == multiplicacao){
		operadorAntigo = "";
		return antigo*atual;
	}
}


const igual = function(){

	
	operando = true;
	atual = Number(screen.innerText);

	if(operadorAtual == ""){
		//atual = atual + atual;
		apresentar(atual);
	}else{
		if(operadorAntigo == ""){
			resultado = calcular(antigo, operadorAtual, atual);
			antigo = resultado;
			apresentar(resultado);
			operadorAtual = "";
		}else{
			resultado = calcular(antigo, operadorAntigo, atual);
			antigo = resultado;
			apresentar(resultado);
			operadorAtual = "";
		}
	}
	var r = {antigo, atual, operadorAntigo, operadorAtual, resultado};
	console.table(r);
}

const operador = function(operador){

	atual = Number(screen.innerText);
	operadorAntigo = operadorAtual;
	if(operadorAntigo == ""){
		antigo = atual;
	}
	operadorAtual = operador;
	operando = true;

	if(operadorAntigo != ""){
			resultado = calcular(antigo, operadorAntigo, atual);
			antigo = resultado;
			apresentar(resultado);
			operando = true;
	}

	var t = {antigo, atual, operadorAntigo, operadorAtual, resultado};
	console.table(t);

	return;

}