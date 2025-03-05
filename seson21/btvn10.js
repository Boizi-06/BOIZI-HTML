let a = Number(prompt('nhap so nguyen'));
let uocSo = 0;
let soNguyento = 0;
let sum = "";

if ((Number.isInteger(a)) && a>0) {
    for ( i = 2 ; i > 0 ; i++) {
        uocSo = 0;
        if (soNguyento == a) {
            break;
        }
        for (j=1;j<=i;j++) {
            if (i % j == 0) {
                uocSo ++;
            }
        }
        if (uocSo == 2) {
            soNguyento++;
            sum = sum + " " + i;
        }
    }
} else {
    console.log('nhap so nguyen');
}
console.log(`${a} so nguyen to dau tien la ${sum}`);




