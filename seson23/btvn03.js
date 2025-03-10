let a = Number(prompt('nhap so luong phan tui ban muon them vao mag ')) ;
let array = [];
let count = 0;
if ( a == 0) {
    console.log('mang khong co phan tu nao');
} else if (a < 0) {
    console.log('so luong phan tu ko hop le ');
} else {
    for ( i =0 ; i< a ; i++) {
        array[i] = Number(prompt('moi ban nhap vao cac phan tu cua mang la cac so nguyen'));
        if ( array[i] < 0 && Number.isInteger(array[i])) {
            count++;
        }
    }
    console.log(count);
}
