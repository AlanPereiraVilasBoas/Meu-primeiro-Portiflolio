const numeroSecreto = Math.floor(Math.random() * 10) + 1;

function iniciarJogo() {
    let tentativa;
    
    do {
    
        tentativa = parseInt(prompt("Adivinhe um número entre 1 e 10:"), 10);
        
       
        if (isNaN(tentativa) || tentativa < 1 || tentativa > 10) {
            alert("Por favor, insira um número entre 1 e 10.");
        } else if (tentativa === numeroSecreto) {
            alert("Parabéns! Você acertou o número!");
        } else {
            alert("Tente novamente.");
        }
    } while (tentativa !== numeroSecreto);
}


iniciarJogo();
