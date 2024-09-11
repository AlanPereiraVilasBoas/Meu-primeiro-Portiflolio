// Define o vetor de palavras
const palavras = ['maçã', 'banana', 'laranja', 'maçã', 'abacaxi', 'maçã'];

// Pede ao usuário para inserir a palavra que deseja contar
const palavraParaContar = prompt('Digite a palavra que deseja contar:');

// Variável para armazenar a contagem
let contagem = 0;

// Percorre o vetor e conta as ocorrências da palavra
for (let i = 0; i < palavras.length; i++) {
    if (palavras[i] === palavraParaContar) {
        contagem++;
    }
}

// Exibe o valor da contagem
alert(`A palavra '${palavraParaContar}' aparece ${contagem} vezes no vetor.`);
