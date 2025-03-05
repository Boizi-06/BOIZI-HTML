let number = 0;
let soChan = 0;
let soLe = 0;
for (i=1; i<6 ; i++) {
    number = Number(prompt(`nhap so nguyen thu ${i}`));
    if(Number.isInteger(number)) {
        if ( number %2 ==0) {
            soChan++;
        } else {
            soLe++;
        }
    } else {
        console.log('hay nhap so nguyen');
    }
}
console.log(`co ${soChan} so chan va co ${soLe} so le `);