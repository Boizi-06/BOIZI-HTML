let a = Number(prompt('nhap vao so muon kiem tra'));
if(Number.isInteger(a) != true) {
    console.log('du lieu khong hop le ');
} else {
    soNguyento(a);
}

function soNguyento (a) {
    let uocSo = 0;
    for(i=2;i<a;i++) {
        if(a%i==0) {
            uocSo++;
        }
    }
    if(uocSo==0) {
        console.log('day la so nguyen to');
    } else {
        console.log('day khong phai so nguyen to');
    }
}