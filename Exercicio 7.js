function findMaxMin() {
    let numbers = [];
    
    
    for (let i = 1; i <= 5; i++) {
        let num = parseInt(prompt(`Digite o número ${i}:`), 10);
        
        numbers.push(num);
    }
    
    
    let maxNum = Math.max(...numbers);
    let minNum = Math.min(...numbers);
    
   
    alert(`O maior número é: ${maxNum}`);
    alert(`O menor número é: ${minNum}`);
}

findMaxMin();
