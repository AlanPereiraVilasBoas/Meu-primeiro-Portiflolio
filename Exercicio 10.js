const palavras = ['maçã', 'banana', 'laranja', 'maçã', 'abacaxi', 'maçã'];

const palavraParaContar = prompt('Digite a palavra que deseja contar:');

let contagem = 0;

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i] === palavraParaContar) {
        contagem++;
    }
}

alert(`A palavra '${palavraParaContar}' aparece ${contagem} vezes no vetor.`);
