let m = parseInt(prompt("Digite o numero:"))
    for(let hipotenusa = 1; hipotenusa <= m; hipotenusa++){
    var aux = 1;
        for(let adjacente = 1; adjacente < hipotenusa; adjacente++){
           let  oposto = adjacente;
            while(adjacente*adjacente + oposto*oposto < hipotenusa*hipotenusa){
             oposto++;
            }
            if (adjacente*adjacente + oposto*oposto == hipotenusa*hipotenusa) {
                alert('hipotenusa' +(hipotenusa) + ',' + 'adjacente'+(adjacente)+ ',' + 'cateto'(oposto) + ','  + 'cateto' (oposto))
                aux = 2;
            }
        }
    }


   