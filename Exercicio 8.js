function encontrarMedia(numbers) {
    const total = numbers.reduce((acc, num) => acc + num, 0);
    return total / numbers.length;
}

function main() {
    let quantity = parseInt(prompt("Digite a quantidade de números que você deseja informar:"), 10);

    if (isNaN(quantity) || quantity <= 0) {
        alert("Quantidade inválida. Por favor, insira um número maior que 0.");
        return;
    }

    let numbers = [];

    for (let i = 0; i < quantity; i++) {
        let num = parseFloat(prompt(`Digite o número ${i + 1}:`));
        numbers.push(num);
    }

    let media = encontrarMedia(numbers);
    alert(`A média dos números é: ${media.toFixed(2)}`);
}

main();
