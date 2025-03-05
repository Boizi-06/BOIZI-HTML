let a = Number(prompt('nhap so ma ban muon tim'));
let sum =0;
if ((Number.isInteger(a))&&a>0) {
    for (let i =0 ; i<=a ; i++) {
        sum += i;
    }
    console.log(sum);
}


