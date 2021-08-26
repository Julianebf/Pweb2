let pot = 2;
let n = 0;
let n =  parseInt(prompt("Digite um numero binario"));

while (n<=0){
    nDecimal = (nDecimal + (n  * pot));
    n = n / 10;
    pot--;
}
alert('O número Biario correspondente ao número ', n, 'é o', + (nDecimal))
