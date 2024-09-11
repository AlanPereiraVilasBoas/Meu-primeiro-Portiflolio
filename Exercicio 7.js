// Função para pedir números ao usuário e calcular o maior e menor número
function findMaxMin() {
    let numbers = [];
    
    // Coleta 5 números do usuário
    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt(`Digite o número ${i}:`), 10);
        // Adiciona o número ao vetor
        numbers.push(num);
    }
    
    // Encontrar o maior e menor número
    let maxNum = Math.max(...numbers);
    let minNum = Math.min(...numbers);
    
    // Exibir o resultado
    alert(`O maior número é: ${maxNum}`);
    alert(`O menor número é: ${minNum}`);
}

// Chama a função
findMaxMin();
