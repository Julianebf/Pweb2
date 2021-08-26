let numero = parseInt(prompt("Insira o número:"))

function nBinario(n) {
if (n == 0) {
    return 1;
} else{
    alert('O numero esta incorreto')
}
   let  resto = n % 2;
   n = (n/2);
   let pot =1;

   while (numero > 0) {                   
        nBinario = n + numero * pot;  
        pot = pot * 10;
    }
    alert('O número decimal correspondente ao número binário', nBinario,'é o', + (n))
