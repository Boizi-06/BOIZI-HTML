// Nắm được cách khai báo và sử dụng hàm.

 

// 2. Mô tả
// Xây dựng menu tính toán trên hai số, gồm các chức năng

// Cộng hai số.
// Trừ hai số.
// Nhân hai số.
// Chia hai số.
// Thoát.


let array = [];
for(i=0;i<2;i++) {
    array[i] = Number(prompt(`nhap so thu ${i+1}`));
}
let a = prompt('moi ban nhap phep tinh');

let result = operator(array,a);
console.log(result);


function operator (array,a) {
    if(a=="+") {
        return array[0]+array[1];
    } else if(a=="-") {
        return array[0]-array[1];
    } else if(a == "*") {
        return array[0]*array[1];
    } else if(a=="/") {
        return Math.max(array[1],array[0]) / Math.min(array[1],array[0]);
    }
}