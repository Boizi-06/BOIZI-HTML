let a = prompt('nhap vao chuoi bat ki');
let b = prompt('nhap vao kí tự bạn muốn tim kiếm trong chuỗi');
let num = 0 ;
if (isNaN(a)) {
    if(b.length < 2) {
        for (i=0;i<a.length;i++) {
            if (a[i]==b) {
                num++;
            }
        }
    }
}
if (num>0) {
    console.log('giá trị bạn nhập vào có trong chuỗi');
} else {
    console.log('gia tri ban nhap vao ko co trong chuoi');
}