let array = [];
let choice = 0;
do {
    
    console.log("\nMENU");
    console.log("1. Nhập vào mảng");
    console.log("2. Hiển thị mảng");
    console.log("3. Thêm phần tử");
    console.log("4. Sửa phần tử");
    console.log("5. Xóa phần tử");
    console.log("6. Thoát");
    choice = Number(prompt('moi ban nhap lua chon'));
    switch (choice) {
        case 1 :
            let soLuong = Number(prompt('moi ban nhap so luong phan tu muon the vao mang'));
            for(i=0;i<soLuong;i++) {
                array[i] = prompt(`nhap phan tu thu ${i+1}`);
            }
            console.log('da them phan tu thanh cong');
            break;
        case 2 :
            console.log('cac phan tu trong mang la ');
            for(i=0 ;i < array.length ; i++) {
                console.log(array[i]);
            }
            break;
        case 3 :
            let newNumber2 = prompt('nhap phan tu ban muon them');
            array.push(newNumber2);
            console.log('da them phan tu vao cuoi mang');
            for(i=0 ;i < array.length ; i++) {
                console.log(array[i]);
            }
            break;
        case 4 : 
            let newNumber = prompt('nhap phan tu ban muon sua');
            let index = Number(prompt('nhap vi tri ban muon sua'));
            array.splice(index,1,newNumber);
            console.log('da sua phan tu');
            for(i=0 ;i < array.length ; i++) {
                console.log(array[i]);
            }
            break;
        case 5 : 
            let index2 = Number(prompt('nhap vi tri phan tu ban muon xoa'));
            let soLuong2 = Number(prompt('nhap so luong phan tu ban muon xoa'));
            array.splice(index2,soLuong2);
            console.log('phan tu da duoc xoa');
            for(i=0 ;i < array.length ; i++) {
                console.log(array[i]);
            }
            break;
        case 6 :
            consolelog('thoat');
            choice=6;
            break;
        default :
            console.log('nhap lai lua chon');        
    }

} while (choice!=6);