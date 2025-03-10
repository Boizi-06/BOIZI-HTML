let array = [];
let choice  = 0 ;
do {
    console.log("\n");
    console.log('==========MENU=========');
    console.log('1.nhap mang so nguyen');
    console.log('2.hien thi mang');
    console.log('3.tiim cac phan tu chan va le ');
    console.log('4.tinh trung binh cong cua mang');
    console.log('5.xoa phan tu tai vi tri chi dinh');
    console.log('6.tim phan tu lon thu 2 trong mang');
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
            let soChan = "";
            let soLe = "";
            for(i=0;i<array.length;i++) {
                if(array[i] % 2 == 0) {
                    soChan += array[i] + " ";
                } else {
                    soLe += array[i] + " ";
                }
            }
            console.log('cac so chan va le tron mang la ');
            console.log(soChan);
            console.log(soLe);
            break;
        case 4 :
            let sum = 0;
            for(i=0;i<array.length;i++) {
                sum+=array[i];
            }
            let tbc = sum / array.length;
            console.log(`trung binh cong cau mang la ${tbc}`);
            break;
        case 5:
            let deleteIndex = Number(prompt('nhap vi tri cua phan tu ma ban muon xoa '));
            if(deleteIndex > 0 && deleteIndex < array.length-1 && Number.isInteger(deleteIndex)) {
                array.splice(deleteIndex,1);
            } else {
                console.log(`vi tri ban tim kiem khong co trong mang`);
            }
            console.log(`mang sau khi da xoaa la ${array}`);
            break;
        case 6:
            let lonThunhat = 0;
            let lonThuhai  =0;
            if(array[0] > array[1]) {
                lonThunhat = array[0];
                lonThuhai = array[1];
            } else {
                lonThuhai = array[0];
                lonThunhat = array[1];
            }
            for(i=2; i<array.length ; i++) {
                if(array[i] > lonThunhat ) {
                    lonThuhai =  lonThunhat;
                    lonThunhat = array[i];
                } else if (array[i] < lonThunhat && array[i] > lonThuhai) {
                    lonThuhai = array[i];
                }
            }
            console.log(`so lon thu hai trong mang la ${lonThuhai}`);
            break;
        case 7:
            console.log('thoat chuong trinh');
            break;
        default :
            console.log('moi ban nhap lua chon hop le ');

    }
    
} while (choice != 7);
