let array = [];
let choice = 0;
do{
    console.log('\n');
    console.log('===============MENU===============');
    console.log('1.nhap so phan tu can nhap va gia tri can nhap');
    console.log('2.in ra cac phan tu dang quan li');
    console.log('3.in ra cac phan tu chan va tinh tog');
    console.log('4.in ra gia tri lon nhat va nho nhat trong maang');
    console.log('5.in ra cac phan tu la so nguyen to trong mang va tinh tong');
    console.log('6.nhap vao 1 so va thong ke trong mang so do xuat hien bao nhieu lan');
    console.log('7.them mot phan tu vao vi tri chi dinh');
    console.log('====================================');
    console.log('\n');
    choice = Number(prompt('Moi ban nhap lua chon'));
    switch(choice) {
        case 1 :
            let a = Number(prompt('moi ban nhap vao so phan tu'));
            for(i=0;i<a;i++) {
                array[i] = Number(prompt(`moi ban nhap phan tu thu ${i+1}`));
            }
            console.log('da nhap xong phan tu');
            break;
        case 2 :
            let newAr = "";
            for(i=0;i<array.length;i++) {
                newAr+=array[i];
            }
            console.log('cac phan tu dang quan ly la ');
            console.log(newAr);
            break;
        case 3:
            let sum =0;
            let soChan ="";
            for(i=0;i<array.length;i++) {
                if(array[i]%2==0) {
                    sum+=array[i];
                    soChan+=array[i]+" ";
                }
            }
            console.log(`cac phan tu la so chan la ${soChan} va tong cua chung la ${sum}`);
            break;
        case 4 :
            let min = array[0];
            let max = array[0];
            for(i=1;i<array.length;i++) {
                if(min>array[i]) {
                    array[i] = min;
                } 
                if(max<array[i]) {
                    max = array[i];
                }
            }
            console.log(`gia tri lon nhat la ${min} va gia tri nho nhat la ${max}`);
            break;
        case 5:
            let sumSnt =0;
            let soNguyento ="";
            let uocSo=0;
            for(i=0;i<array.length;i++) {
                uocSo=0;
                if (array[i] < 2){
                    uocSo++;
                }
                for(j=2;j<array[i];j++) {
                    if(array[i] % j == 0) {
                        uocSo++
                    }
                }
                if(uocSo==0) {
                    sumSnt+=array[i];
                    soNguyento+=array[i];
                }
            }
            console.log(`cac so nguyen to co trong mang la ${soNguyento} va tong cua chung la ${sumSnt}`);
            break;
        case 6:
            let searchNumber = Number(prompt('nhap vap so ban muon tim'));
            let soXh = 0;
            for(i=0;i<array.length;i++) {
                if(array[i] == searchNumber) {
                    soXh++;
                }
            }
            if(soXh>=1) {
                console.log(`gia tri ${searchNumber} xuat hien ${soXh} lan`);
            } else {
                console.log('gia tri ban tim kiem khong xuat hien trong mang');
            }
            break;
        case 7 :
            let addNumber = Number(prompt('nhap so phan tu ban muon them vao mang'));
            array.push(addNumber);
            console.log('da them phan tu thanh cong');
            console.log(array);
            break;
        case 0 :
            console.log('thoat chuong trinh');
            break;
        default :
            console.log('moi ban nhap so hop le');   
    }
}while (choice!=0);