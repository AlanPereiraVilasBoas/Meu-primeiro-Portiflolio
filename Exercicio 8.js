// Função para calcular a média dos números
function encontrarMedia(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
}

// Função principal para executar o programa
function main() {
    let quantity = parseInt(prompt("Digite a quantidade de números que você deseja informar:"), 10);

    // Verifica se a quantidade é válida
    if (isNaN(quantity) || quantity <= 0) {
        alert("Quantidade inválida. Por favor, insira um número maior que 0.");
        return;
    }

    let numbers = [];

    // Coleta os números do usuário
    for (let i = 0; i < quantity; i++) {
        let num = parseFloat(prompt(`Digite o número ${i + 1}:`));
        // Adiciona o número ao vetor
        numbers.push(num);
    }

    // Calcula a média e exibe o resultado
    let media = encontrarMedia(numbers);
    alert(`A média dos números é: ${media.toFixed(2)}`);
}

// Executa a função principal
main();
