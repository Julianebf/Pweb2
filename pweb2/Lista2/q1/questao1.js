
    let num  = parseInt(prompt("Digite um valor seguido de 0:"))
    if((num !=0)){
        alert(" Os números deve ser inteiros não-nulos, cada qual seguida por um 0.")
    }else{
        var soma = 0;
        for(let i = 0; i < m; i++){
            if (i % 2 == 0) {
                soma += i
            }
        }
        alert('A soma dos pares de cada sequencia eh'+(soma));
    }
