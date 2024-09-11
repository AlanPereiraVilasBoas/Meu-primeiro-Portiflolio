let soma = 0;
let numero;

do {
    numero = parseInt(prompt("Digite um número inteiro (ou 0 para parar):"), 10);
    
    if (numero !== 0) {
        soma += numero;
    }
} while (numero !== 0);

alert("A soma de todos os números inseridos é: " + soma);
