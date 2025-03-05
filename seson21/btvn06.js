let a = Number(prompt('nhap vao 1 so nguyen bat ki'));
let uocSo ="";
if ((Number.isInteger(a)) && a>0) {
    for(i=1 ;i<=a ; i++) {
        if (a % i  == 0 ) {
            uocSo = uocSo + " " + i ;
        }

    }
} else {
    console.log('vui long nhap so nguyen');
}
console.log(uocSo);