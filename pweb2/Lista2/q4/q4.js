const numPrimo = (numero) => {
    var count = 0
    for(let i = 1; i <= number; i++){
        if(number % i == 0){
            count += 1
        }          
    }
    if(contador == 2){
        return true
    }       
    return false
}
    let numero = parseInt(prompt("Quantidade de números a digitar:"))
        let soma = 0
        for(let i = 1; i <= number; i++){
            let x = parseInt(prompt("digite um número:"))
            if(numPrimo(x))
                soma += x
        }
        alert("Soma dos primos digitados: " + (soma))
