fibonacciNumbers10();

function fibonacciNumbers10() {
    let a1 = 0;
    let a2 = 1;
    let arr = [10];

    for (let i = 0; i < 8; i++) {
        let temp = a2;
        a2 = a1 + a2;
        a1 = temp;
        arr[i] = a1;
        arr[i+1] = a2;
    }

    alert('0,' + arr);
}



