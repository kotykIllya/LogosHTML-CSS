const arr = ['test', 'exam', 'value', 'beer', 'index'];

function find(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            return i;
        }
    }
    return -1;
}
console.log(find(arr, 'exam'));
