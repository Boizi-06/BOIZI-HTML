let array = [];
let choice  = 0 ;
let a;
let b;
do {
    console.log("\n");
    console.log('==========MENU=========');
    console.log('1.nhap mang 2 chieu');
    console.log('2.hien thi mang 2 chieu');
    console.log('3.tinh tong cac phan tu trong mang 2 chieu');
    console.log('4.tim phan tu lon nhat va chi so cua no');
    console.log('5.Tính trung bình cộng các phần tử của một hàng cụ thể');
    console.log('6.Đảo ngược các hàng trong mảng');
    console.log('7.thoat chuong trinh');
    console.log('========================');
    console.log("\n");
    choice = Number(prompt('nhap lua chon cua ban'));
    switch(choice) {
        case 1:
            a = Number(prompt('nhap so hang '));
            b = Number(prompt('nhap so cot'));
            for(i=0;i<a;i++) {
                let a =[];
                for(j=0;j<b;j++) {
                    a[j] = Number(prompt(`moi ban nhap phan tu o vi tri [${i}][${j}]`));
                }
                array.push(a)
            }
            console.log('da nhap xong manng');
            
            break;
        case 2:
            console.log('cac gia tri trong mang la');
            for(i=0;i<array.length;i++) {
                console.log(array[i]);
            }
            break;
        case 3:
            let sum = 0;
            for(i=0;i<a;i++) {
                for(j=0;j<b;j++) {
                    sum+=array[i][j];
                }
            } 
            console.log(sum);       
            break;
        case 4 :
            let max = array[0][0];
            let maxA = 0;
            let maxB=0;
            for(i=0;i<a;i++) {
                for(j=0;j<b;j++) {
                    if(max < array[i][j]) {
                        max = array[i][j];
                        maxA = i;
                        maxB = j;
                    }
                }
            }
            console.log( `phan tu co gia tri lon nhat trong mang la ${max} va vi tri cua no la [${maxA}][${maxB}]`);
            break;
        case 5:
            let sum1=0;
           
            for(i=0;i<a;i++) {
                sum1=0;
                for(j=0;j<b;j++) {
                    sum1+=array[i][j];
                }
                sum1 = sum1 / b ;
                sum1.toFixed(2);
                console.log(`trung binh cong hang thu ${i+1} = ${sum1}`);
            }
           
            break;
        case 6:
            let newAr = [];
            for(i=a-1;i>=0;i--) {
                let a = [];
                for(j=b-1;j>=0;j--) {
                    a.push(array[i][j]);
                }
                newAr.push(a);
            }
            console.log(newAr);
            
            break;
        case 7:
            console.log('thoat chuong trinh');
            break;
        default :
            console.log('moi ban nhap lua chon hop le ');

    }
    
} while (choice != 7);
