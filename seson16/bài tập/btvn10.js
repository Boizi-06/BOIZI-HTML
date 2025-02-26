let a = parseInt(prompt('nhap so thu nhat'));
let b = parseInt(prompt('nhap so thu hai'));
let min = Math.min(a,b);
let max = Math.max(a,b);
let ramdomNumber=(Math.random() * (max - min)) + min;
let newNumber=ramdomNumber.toFixed(2);
alert (`so ơ giua khoang ${a} va ${b} la ${newNumber}`);