let array = [];
let choice = 0;
do {
    console.log("\n");
    console.log('===============MENU===============');
    console.log('1.nhap mang');
    console.log('2.hien thi mang');
    console.log('3.tim phan tu lon nhat va nho nhat trong mang');
    console.log('4.tinh tong cac phan tu trong mnag');
    console.log('5. tim so lan xuat hien cua mot phan tu trong mang');
    console.log('6. xap xep mang tang dan');
    console.log('7.thoat');
    console.log("\n");
    choice = Number(prompt('nhap lua chon'));
    switch(choice) {
        case 1:
            let a = Number(prompt('nhap so phan tu cua mangf'));
            for(i=0;i<a;i++) {
                array[i] = Number(prompt(`nhap phan tu thu ${i+1}`));
            }
            console.log('nhap phan tu thanh cong');
            break
        case 2: 
            console.log('cac phan tu trong mang la ');
            console.log(array);
            break;
        case 3:
            let min = array[0];
            let max = array[0];
            for(i=1;i<array.length;i++) {
                if(max < array[i]) {
                    max = array[i];
                } else  if (min > array[i]){
                    min= array[i];
                }
            }
            console.log(`phan tu lon nhat trong mang la ${max} va phan tu nho nhat la ${min}`);
            break;
        case 4 :
            let sum = 0;
            for(i=0;i<array.length ;i++) {
                sum+=array[i];
            }
            console.log(`tong cac phan tu trong mang la ${sum}`);
            break;
        case 5:
            let searchNumber = Number(prompt('nhap so ban can tim'));
            let count = 0;
            for(i=0;i<array.length;i++) {
                if(searchNumber==array[i]) {
                    count++;
                }
            }
            if(count==0) {
                console.log('phan tu ban tim kiem ko co trong mang');
            } else {
                console.log(`phan tu ${searchNumber} xuat hien ${count} lan`);

            }
             break;
        case 6 :
            for(i=0;i<array.length-1;i++) {
                for(j=1+i;j<array.length ; j++) {
                    if(array[i]>array[j]) {
                        let temp = array[i];
                        array[i] = array[j];
                        array[j] = temp;
                    }
                }
            }
            console.log('mang sau khi xap xep la');
            console.log(array);
            break;
        case 7:
            console.log('thoat chuong trinh');
            break;
        default : 
            console.log('moi ban nhap lai lua chon');  
    }
    

} while (choice!=7);