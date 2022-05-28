let employeeSalaries = {
    salary1: 12000,
    salary2: 18000,
    salary3: 9000,
    salary4: 6000,
    salary5: 26000,
}

function sum() {
    let s = 0;
    for (let field in employeeSalaries) {
        s += employeeSalaries[field];
    }
    return s;
}

console.log(sum());