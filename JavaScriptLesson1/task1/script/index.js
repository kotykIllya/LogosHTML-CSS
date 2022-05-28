sumBefore();

function sumBefore() {
    let number = prompt('Enter your number:');
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
     alert("Sum of number before " + number + " (including " + number +  ") = " + sum);
}