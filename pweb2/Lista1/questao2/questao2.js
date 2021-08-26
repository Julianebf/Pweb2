let n;
let num = [];
let resultado = []
        let n  = parseInt(prompt("Digite um número:"))
        for (let i = 0; i < n; i++) {
            num.push(n)    
        } 
        for (let i = 0; i < n; i++) {
            resultado.push(num[i]*num[i])
        } 

        alert("O quadrado dos numeros eh: " +(resultado));
            