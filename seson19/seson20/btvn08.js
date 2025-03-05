let a = Number(prompt('nhap vao so luong so nguyen to dau tien ma ban muon tim'));
let soNguyento = 0;
let uocSo = 0 ;
let abc = "";
while (soNguyento != a ) {


    for(i=2 ;i>0 ;i++ ) {
        uocSo=0;
        if ( soNguyento==a) {
           break;
        }
        for(j=1;j<=i;j++) {
            if (i%j==0) {
                uocSo++;
            }
        }
        if (uocSo==2) {
            soNguyento++;
            abc=abc +i +" ";
        }
       
    }
}
console.log(abc);