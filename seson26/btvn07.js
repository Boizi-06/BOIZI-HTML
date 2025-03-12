
let numbers = [2,5,10];



let squaredNumbers = numbers.map(num => num ** 2);


let evenNumbers = squaredNumbers.filter(num => num % 2 === 0);



console.log(evenNumbers);
