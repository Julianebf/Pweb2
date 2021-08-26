let numero = parseInt(prompt("Digite o número:"))
        let aux = numero;
        let reverso = 0;

         while (aux != 0) {
         reverso = reverso * 10 + aux % 10;  
         aux = aux / 10;                     
        }

        if (reverso == numero)
        alert("é palindrome", numero);
        else
        alert(" nao é palindrome", numero);
