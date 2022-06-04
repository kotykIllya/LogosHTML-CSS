function operation(inputOperator) {
    let a = Number(document.getElementById('numberInput1').value);
    let b = Number(document.getElementById('numberInput2').value);
    op = {
        "+": function() { return a + b },
        "-": function() { return a - b },
        "x": function() { return a * b },
        "/": function() { return a / b },
    };
    document.getElementById('result').innerText = op[inputOperator]();
}

function clean() {
    document.getElementById('numberInput1').value = '';
    document.getElementById('numberInput2').value = '';
    document.getElementById('result').innerText = '';
}
