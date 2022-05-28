checkNumber();

function checkNumber() {
    let number = prompt('Enter number:');

    if (number < 0) {
        alert('Your number is negative');
    }
    if (number == 0) {
        alert('Your number is zero');
    }
    if (number > 0) {
        alert('Your number is positive');
    }
}