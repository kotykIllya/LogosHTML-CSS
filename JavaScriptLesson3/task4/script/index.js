const array = [7, 8, 9, 10, 55, 19, 1, 58, 66, 11, 12, 13, 4, 8, 25, 3];
let newArr = [];

function filterRange(array, a, b) {
    newArr = array.slice(a, b);
    return newArr;
}

console.log(filterRange(array, 2, 7));
console.log(newArr);
