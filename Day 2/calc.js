function getOperator(num_1, num_2, operator){
    switch (operator) {
        case "+": return num_1 + num_2;
        case "-": return num_1 - num_2;
        case "*": return num_1 * num_2;
        case "/": return num_1 / num_2;
        case "%": return num_1 % num_2;
    }
}

function calc(operator){
    let num_1 = parseFloat(document.getElementById('input_1').value);
    let num_2 = parseFloat(document.getElementById('input_2').value);
    document.getElementById('result').textContent="Result: "+ getOperator(num_1, num_2, operator);
}