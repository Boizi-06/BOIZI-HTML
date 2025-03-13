// Xây dựng menu xử lý số nguyên, gồm các chức năng:

// Nhập danh sách số nguyên.
// Tính trung bình các số.
// Tìm số chẵn lớn nhất.
// Tìm số lẻ nhỏ nhất.
// Thoát.

 

// 3. Đánh giá


let array = [];
let a = 0;
let choice = 0;
let accCount = 0;
do {
    console.log("\n");
    console.log('Nhập danh sách số nguyên.');
    console.log('Tính trung bình các số.');
    console.log('Tìm số chẵn lớn nhất.');
    console.log('Tìm số lẻ nhỏ nhất.');
    console.log("\n");
    choice = Number(prompt('moi ban nhap lua chon'))
    switch (choice) {
        case 1:
            let accCount = Number(prompt('moi ban nhap so phan tu cua mang'));  
            for(i=a;i<accCount+a;i++) {
                array[i] = Number(prompt(`nhap so nguyen thu ${i+1}`));
                if(Number.isInteger(array[i]) != true) {
                    console.log('vui long nhap so nguyen');
                    break;
                }
            }
            a+=accCount;
            console.log('nhap  mang thanh cong');
            break;
        case 2:
            let average = array.reduce (function (acc,curr) {
                acc = acc + curr;
                return acc;
            },0);
            break;
        case 3 :
            let sochan = array.filter(function(element){
                if(element % 2 == 0) {
                    return element;
                }
            })
            let sochanlonnhat = sochan.reduce(function(acc,curr) {
                if(acc < curr){
                    acc = curr;
                } 
                return acc;
            }, sochan[0]);
            console.log(sochanlonnhat);
            break;
        case 4:
            let sole = array.filter(function(element){
                if(element % 2 != 0) {
                    return element;
                }
            })
            let solenhonhat = sole.reduce(function(acc,curr) {
                if(acc > curr){
                    acc = curr;
                } 
                return acc;
            }, sole[0]);
            console.log(solenhonhat);
            break;
        case 5 :
            console.log('thoat');
            break;
        default:
            console.log('lua chon khong hop le');
            
    }

} while (choice != 5);