let a = Number(prompt('nhap mot so nguyen bat ki'));
let uocSo = 0;
if ((Number.isInteger(a)) && a >0) {
     for( i = 2 ; i < a ; i ++) {
        if (a  % i == 0) {
            uocSo++;
        }
     }
}
if (uocSo==0) {
    console.log('day la so nguyen to');
} else {
    console.log('day ko phai la so nguyen to');
}