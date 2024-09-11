function filtrarNumerosMaiorQue(vetor, valor) {
    return vetor.filter(num => num > valor);
}

function main() {
    const numeros = [1, 5, 8, 12, 3, 9, 15];
    
    const valorEspecifico = 7;
    
    const numerosFiltrados = filtrarNumerosMaiorQue(numeros, valorEspecifico);
    
    console.log(`Números maiores que ${valorEspecifico}:`, numerosFiltrados);
}

main();
