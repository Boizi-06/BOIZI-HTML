let matrix  = [];
let choice = 0;
let sum2=0;
let sum3 =0;
do {
    console.log("\n");
    console.log('==========MENU=========');
    console.log('1. Nhập mảng 2 chiều');
    console.log('2.hien thi mang 2 chieu');
    console.log('3. Tính tổng các phần tử trong mảng');
    console.log('4. Tính tổng đường chéo chính');
    console.log('5. Tính tổng đường chéo phụ');
    console.log('6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán');
    console.log('7.thoat chuong trinh');
    console.log('========================');
    console.log("\n");
    choice = Number(prompt('nhap lua chon cua ban'));
    switch(choice) {
        case 1:
            let row = Number(prompt('nhap vao so hang'));
            let cow = Number(prompt('nhap vao so cot'));
            for(i=0;i<row;i++) {
                let row = [];
                for(j=0;j<cow;j++) {
                    row[j] = Number(prompt(`moi ban nhap phan tu tai vi tri [${i+1}][${j+1}]`));
                }
                matrix.push(row);
            }
            console.log('da nhap thanh cong');
            break;
        case 2:
            for(i=0;i<matrix.length;i++) {
               console.log(matrix[i].join(" "));  
            }
            break;
        case 3:
            let sum = 0;
            for(i=0;i<matrix.length;i++) {
                for(j=0;j<matrix[i].length;j++){
                    sum+=matrix[i][j];
                }
            }
            console.log( `tong cac phan tu trong mang la ${sum}`);
            break;
        case 4 :
            let sum1 = 0;
            sum2 =0;
            for(i=0;i<matrix.length;i++){
                for(j=0;j<matrix[i].length;j++){
                    if(i == j){
                        sum1+=matrix[i][j];
                    } 
                    if(i + j == matrix.length - 1) {
                        sum2+=matrix[i][j];
                    }
                }
            }
            console.log(`tong duong cheo chinh la ${sum1}`);
            break;
        case 5:
            console.log(`tong duong cheo phu la ${sum2}`);
            break;
        case 6:
            let flag = true;
            do {
                
                console.log('1.trung binh cong mot hang');
                console.log('2.trung binh cong mot cot');
                let choice2 = Number(prompt('moi ban nhap lua chon'));
                switch(choice2) {
                    case 1 :
                        sum3 = 0;
                        console.log('trung binh cong mot hang la');
                        for(i=0;i<matrix.length;i++) {
                            sum3 =0;
                            for(j=0;j<matrix[i].length;j++) {
                                sum3+=matrix[i][j];
                            }
                            console.log(sum3/matrix[i].length);
                        }
                        flag = false;
                        break;
                    case 2 :

                        console.log('trung binh cong mot cot la');
                        for (let j = 0; j < matrix[0].length; j++) { 
                            sum3 = 0;
                            for (let i = 0; i <matrix.length; i++) { 
                                sum3 += matrix[i][j];
                            }
                            console.log("Trung bình cộng cột", j, "là:",`${sum3/matrix.length}`);
                        }
                        flag = false;
                        break;
                    default : 
                        console.log('moi ban nhap lai lua chon')
                        flag = true;
                }
            } while (flag);
            break;
        case 7:
            console.log('thoat chuong trinh');
            break;
        default :
            console.log('moi ban nhap lua chon hop le ');

    }
    
} while (choice != 7);
