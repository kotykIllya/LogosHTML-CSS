function operation(a, b, callback) {
    return callback(a, b);
}

let result;
try {
    result = operation(10, 20, (a, b) => a + b);
} catch (error) {
    console.log(error)
}

console.log(result);