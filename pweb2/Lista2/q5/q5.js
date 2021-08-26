let numero = parseInt(prompt("Digite um numero para se elevado a potencia de 3:"))
for (n = 1; n <= m; n++) {
    soma = 0;
    for (inicio = 1; soma != n * n * n; inicio = inicio + 2) {
      soma = 0;
      for (i = 0; i < n; i++)
	soma = soma + inicio + 2 * i;
    }
    inicio = inicio - 2;
    alert (inicio);
    for (i = 1; i < n; i++)
      alert( inicio+2*i);
   
  }

  return 0;
