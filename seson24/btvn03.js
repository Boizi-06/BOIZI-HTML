let array = [];
let choice  = 0 ;
do {
    console.log("\n");
    console.log('==========MENU=========');
    console.log('1.nhap mang so nguyen');
    console.log('2.hien thi mang');
    console.log('3.tim phan tu lon nhat va in ra chi so cua no ');
    console.log('4.tinh trung binh cong  cau cac so duong  cua mang');
    console.log('5.dao nguoc mang');
    console.log('6.kiem tra mang doi xung');
    console.log('7.thoat chuong trinh');
    console.log('========================');
    console.log("\n");
    choice = Number(prompt('nhap lua chon cua ban'));
    switch(choice) {
        case 1:
            let a = Number(prompt('so phan tu ban muon them vao mang'));
            for(i=0;i<a;i++) {
                array[i] = Number(prompt(`nhap phan tu thu ${i+1}`));
                if(Number.isInteger(array[i]) != true) {
                    console.log('vui long nhap so nguyen');
                    break;
                }
            }
            console.log('da nhap xong mang so nguyen');
            break;
            
        case 2:
            console.log('cac gia tri trong mang la');
            console.log(array);
            break;
        case 3:
            let max = array[0];
            let indexMax = 0;
            for(i=1;i<array.length;i++) {
                if(max < array[i]) {
                    max = array[i];
                    indexMax = i;
                }
            }
            console.log(`so lon nhat trong mang la ${max} chi so cua no la ${indexMax}`);
            break;
        case 4 :
            let sum = 0;
            for(i=0;i<array.length;i++) {
                if(array[i] > 0) {
                    sum+=array[i];
                }
            }
            let tbc = sum / array.length;
            console.log(`trung binh cong cua cac so duong trong mang la ${tbc}`);
            break;
        case 5:
            let newAr = [];
            for (i = array.length - 1 ; i>=0 ; i--) {
                newAr.push(array[i]);
            }
            console.log(`mang sau khi dao nguoc la `);
            console.log(newAr);
            break;
        case 6:
            let check = 0;
            for (i=0;i<= array.length/2;i++) {
                if (array[i]!=array[array.length-1-i]){
                    check++;
                    console.log('day khong phai so doi xung');
                    break;
                }
            }
            if (check == 0) {
                console.log('day la so doi xung');
            }
            break;
        case 7:
            console.log('thoat chuong trinh');
            break;
        default :
            console.log('moi ban nhap lua chon hop le ');

    }
    
} while (choice != 7);
