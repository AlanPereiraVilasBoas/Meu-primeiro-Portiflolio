// Função para filtrar números maiores que um valor específico
function filtrarNumerosMaiorQue(vetor, valor) {
    // Usando o método filter para criar um novo vetor com os números maiores que o valor especificado
    return vetor.filter(num => num > valor);
}

// Exemplo de uso
function main() {
    // Vetor de números exemplo
    const numeros = [1, 5, 8, 12, 3, 9, 15];
    
    // Valor específico para comparar
    const valorEspecifico = 7;
    
    // Filtrar números maiores que o valor específico
    const numerosFiltrados = filtrarNumerosMaiorQue(numeros, valorEspecifico);
    
    // Exibir o novo vetor
    console.log(`Números maiores que ${valorEspecifico}:`, numerosFiltrados);
}

// Executa a função principal
main();
