let a = Number(prompt('nhap lai so fibonaci'));
let sum = 0;
let f0 = 1;
let f1 = 1;
let ketQua = "";
ketQua = ketQua + f0 + " " + f1 + " " ;
if ((Number.isInteger(a))&& a<0 ) {
    for(i=0;i<a-2;i++) {
        sum = f0 + f1 ;
        f0=f1 ;
        f1=sum ;
        ketQua = ketQua + sum + " "; 
    }
    console.log(ketQua)
} else {
    console.log('')
}
