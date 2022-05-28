game();

function game() {

    while (true) {
        let a = prompt('4 * 7 = ?');
        if (a !== '28') {
            alert('incorrect answer, try again');
        }
        if (a === '28'){
            alert('your answer is correct');
            break;
        }
    }
}