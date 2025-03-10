let array=[];
let choice = 0;
let a = 0;

do {
    console.log('=====================MENU===================');
    console.log('');
    console.log('1.nhap so phan tu va gia tri cac phan tu can nhap');
    console.log('2.In ra gia tri cac phan tu dang quan li');
    console.log('3.in ra cac phan tu chan tinh tong va sap xep chung giam dan');
    console.log('4.in ra gia tri lon nhat,gia tri nho nhat,va vi tri cua chung');
    console.log('5.in ra cac so nguyen to trong mamg va tinh tong');
    console.log('6.nhap 1 so và dem so lan so do xuat hien trong mang');
    console.log('7.them mot phan tu vao vi tri chi dinh');
    console.log('8.xoa mot phan tu theo gia tri');
    console.log('9.xap xep mot mang theo thu tu tang hoac giam dan');
    console.log('0.thoat chuong trinh');
    console.log('==============================================');
    console.log('');

    choice = Number(prompt('moi ban nhap kua chon'));

    switch(choice) {
        case 1:
            a = Number(prompt('nhap so phan tu can nhap vao mang'));
            if(Number.isInteger(a) && a>=3) {
                for(i=0;i<a;i++) {
                    array[i] = Number(prompt(`phan tu thu ${i+1}`));
                }
                console.log('da nhap xong phan tu');
            } else {
                console.log('vui long nhap lai so phan tu');
            }
            break;
        case 2 :
            console.log('cac phan tu dang phan li la ');
            let newAr = "";
            for(i=0;i<array.length;i++) {
                newAr+=array[i] + " ";
            }
            console.log(newAr.slice(0,newAr.length-1));
            break;
        case 3:
            let sum = 0;
            let array2 = [];
            for(i=0;i<array.length;i++) {
                if(array[i] % 2 == 0) {
                    sum += Number(array[i]);
                    array2.push(array[i]);
                }
            }   

            for(i=0; i<array2.length-1; i++){
                for(j=i+1; j<array2.length; j++) {
                    if(array2[i] < array2[j]) {
                        let temp1 = array2[i];
                        array2[i]=array2[j];
                        array2[j]=temp1;
                    }
                }
            }
            console.log(`cac so chan co trong mang va xap xep giam dan la ${array2}`);
            console.log(`tong cac so chan la ${sum}`);
            break;
        case 4: 
            let max = array[0];
            let min = array[0];
            let indexMin = 0;
            let indexMax = 0;
            for(i=0;i<array.length;i++) {
                if(max<array[i]) {
                    max = array[i];
                    indexMax=i;
                }
            }
            for(i=0;i<array.length;i++) {
                if(min>array[i]) {
                    min = array[i];
                    indexMin=i;
                }
            }
            console.log(`gia tri lon nhat trong mang la ${max} va vi tri cua no la ${indexMax}`);
            console.log(`gia tri nho nhat trong mang la ${min} va vi tri cua no la ${indexMin}`);
            break;
        case 5:
            let uocSo = 0;
            let soNguyento = "";
            let sumSnt = 0;
            for(i=0;i<array.length;i++) {
                uocSo=0;
                if(array[i]<2){
                    uocSo++;
                   
                }
                for(j=2;j<array[i] ;j++) {
                    if(array[i] % j == 0){
                        uocSo++;
                    }
                }
                if(uocSo==0) {
                    soNguyento+=array[i] + " ";
                    sumSnt+=array[i];
                }
            }
            console.log(`cac so nguyen to co trong manbg la ${soNguyento}`);
            console.log(`tong cac so nguyen to la ${sumSnt}`);
            break;
        case 6 :
            let searchNumber = Number(prompt('nhap so ma ban muon tim kiem no trong mang'));
            let xuatHien = 0;
            for(i=0;i<array.length;i++) {
                if(searchNumber==array[i]) {
                    xuatHien++;
                }
            }
            xuatHien == 0 ? console.log('so ban tim ko co trong mang') : console.log(`so ${searchNumber} xuat hien ${xuatHien} lan`);
            break;
        case 7:
            let newNumber = Number(prompt('nhap gia tri phan tu ban muon them'));
            let indexNewnumber = Number(prompt('nhap vi tri phan tu ban muon them'));
            array.splice(indexNewnumber,0,newNumber);
            console.log(array);
            console.log('da them phan tu thanh cong');
        case 8 : 
            let numberDelete = Number(prompt('nhap vao gaio tri ban muon xoa khoi mag '));
            let count1 = 0;
            for(i=0;i<array.length;i++) {
                if(numberDelete == array[i]) {
                    array.splice(i,1);
                }else {
                    count1++;
                }
            }
            if (count1 == array.length) {
                console.log('gai tri ban muon xoa ko ton taai trong maag');
            } else {
                console.log('da xoa thanh cong');
                console.log(array);

            }
            break;
        case 9 :
            
            console.log('1.xap xep giam dan');
            console.log('2.xap xep tang dan');
            temp1 = 0;
            let choice2 = Number(prompt("moi ban chọn cách xắp xếp"));
            do {
                if(choice2 == 1 ) {
                    for(i=0;i<array.length-1;i++) {
                        for(j=i+1;j<array.length;j++) {
                            if(array[i] < array[j]) {
                                temp1 = array[j];
                                array[j]=array[i];
                                array[i]=temp1;
                            }
                        }
                    }
                    console.log('mang sau khi xap xep giam dan la ');
                    console.log(array);

                    

                } else if (choice2 == 2) {
                    for(i=0;i<array.length-1;i++) {
                        for(j=1+i;j<array.length;j++) {
                            if(array[i] > array[j]) {
                                temp1 = array[i];
                                array[i]=array[j];
                                array[j]=temp1;
                            }
                        }
                    }
                    console.log('mang sau khi xap xep tang dan la ');
                    console.log(array);
                } else {
                    console.log('moi ban nhap lai lua chon');
                }
            } while (choice2 != 1 && choice2 != 2 );
            break;

        case 0:
            console.log('thoat chuong trinh');
            break;
        default :
            console.log('nhap lai lua chon');

    }
} while (choice!=0);