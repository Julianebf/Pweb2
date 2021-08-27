var displayBuffer = "";
var numero = "";
var termos = [undefined,  undefined, undefined];
var resultado = undefined;

function pressNumero(numbers){
    numero = numero.concat(numbers.innerHTML);
    showDisplay(numbers.innerHTML);
}

function pressOperator(operators){
    termos[0] = numero;
    termos[1] = operators.innerHTML;
    showDisplay(operators.innerHTML);
    numero = "";
}

function pressEqual() {
    termos[2] = numero;
    switch(termos[1])  {
        case '+':
            resultado = Number(termos[0])+Number(termos[2]);
            break;
        case '-':
            resultado = Number(termos[0])-Number(termos[2]);
            break;
        case '*':
            resultado = Number(termos[0])*Number(termos[2]);
            break;
        case '/':
            resultado = Number(termos[0])/Number(termos[2]);
            break;
    }
    clearDisplay();
    showDisplay(resultado);
}
function clearMemory() {
    numero = "";
}

function clearDisplay()  {
    displayBuffer = "";
    var tela = document.getElementById("screen");
    tela.value = displayBuffer;
}

function clearAll()  {
    clearDisplay()
    clearMemory()
}
function showDisplay(conteudo){
    displayBuffer = displayBuffer.concat(conteudo);
    var tela = document.getElementById("sreen");
    tela.value = displayBuffer;
}
