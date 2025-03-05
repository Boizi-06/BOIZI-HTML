let a = Number((prompt('hay nhap vao mot so nguyen co 3 chu so')));
let soHangtram = 0;
let soHangchuc = 0;
let soDonvi = 0 ;
if ((Number.isInteger(a)) && a>0) {
    if(a/100 >= 1) {
       soHangtram = Math.floor(a/100);
       soHangchuc =  Math.floor(((a % 100) / 10)) ;
       soDonvi = a % 10 ;
       if ((Math.pow(soDonvi,3))+(Math.pow(soHangchuc,3))+(Math.pow(soHangtram,3)) == a) {
            console.log(` so ${a} la so Armstrong`);
       } else {
        console.log(` so ${a} khong phai la so Armstrong`);
       }

    } else {
        console.log('nhap so nguyen co 3 chu so');
    }
}else {
    console.log('nhap so nguyen co 3 chu so');
}
