const styles = ['Jazz', 'Blues'];
console.log(styles);

styles.push('Rock & roll');
console.log(styles);

styles.splice(styles.length - 2, 1, 'Classical');
console.log(styles);

let start = styles.shift();
console.log(start);
console.log(styles);

styles.unshift('Rap', 'Reggie');
console.log(styles);