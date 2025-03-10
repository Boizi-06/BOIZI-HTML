let Str = "";
let choice  = 0 ;
do {
    console.log("\n");
    console.log('==========MENU=========');
    console.log('1. Nhập chuỗi');
    console.log('2. Hiển thị chuỗi');
    console.log('3. Tính độ dài của chuỗi ');
    console.log('4. Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗ');
    console.log('5. Kiểm tra chuỗi có phải là chuỗi đối xứng không');
    console.log('6. Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ');
    console.log('7.thoat chuong trinh');
    console.log('========================');
    console.log("\n");
    choice = Number(prompt('nhap lua chon cua ban'));
    switch(choice) {
        case 1:
            
            
            Str = prompt('moi ban nhap vao mot chuoi');
            console.log('da nhap thanh cong');
            break;
            
        case 2:  
            console.log(Str);
            break;
        case 3:
            console.log(`do dai cua chuoi la ${Str.length}`);
            break;
        case 4 :
            let searchValue = prompt('nhap gia tri ban muon tim kiem ');
            count = 0;
            for(i=0;i<Str.length;i++) {
                if(Str[i] == searchValue) {
                    count++;
                }
            }
            if(count==0) {
                console.log('gai tri ban tim ko co trong chuoi')
            } else {
                console.log(`gia tri ${searchValue} xuat hien ${count} lan trong chuoi`);
            }
            break;
        case 5:
            let enor = 0;
            for(i=0;i<Str.length/2;i++) {
                if(Str[i] != Str[Str.length-1-i]) {
                    enor++;
                    break;
                }
            }
            if(enor==0) {
                console.log('day la chuoi doi xung');
            } else {
                console.log('day khong phai chuoi doi xung');
            }
            break;
        case 6:
          
                let newStr = "";
                for (let i = 0; i < Str.length; i++) {
                    if (i == 0 || Str[i - 1] == " ") {  
                        newStr += Str[i].toUpperCase();
                    } else {
                        newStr += Str[i]; 
                    }
                }
                console.log(newStr);
                break;
            
        case 7:
            console.log('thoat chuong trinh');
            break;
        default :
            console.log('moi ban nhap lua chon hop le ');

    }
    
} while (choice != 7);

