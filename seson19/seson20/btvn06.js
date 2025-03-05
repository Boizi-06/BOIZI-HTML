let a = Number(prompt('nhap vao so ma ban muon kiem tra '));
let uoc =0;
if (Number.isInteger(a) && a>1 ) {
    for(i=1;i<a;i++) {
        if ( a % i == 0 ) {
            uoc++;
        }
    }
    if (uoc==1) {
        console.log('la so nguyen to');
    } else {
        console.log('khong la so nguyen to');
    }
}