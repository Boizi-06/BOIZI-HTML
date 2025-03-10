let Str = "";
let choice = 0;
let newStr = "";
do {
    console.log("\n");
    console.log('==========MENU=========');
    console.log('1. Nhập chuỗi');
    console.log('2. Hiển thị chuỗi');
    console.log('3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi ');
    console.log('4. Đảo ngược chuỗi ký tự');
    console.log('5. Đếm số lượng từ trong chuỗi ký tự');
    console.log('6. Tìm kiếm và thay thế các ký tự (Do người dùng nhập vào) trong chuỗi gốc. Ví dụ người dùng nhập “e”, chuỗi gốc “Hello” → Tìm thấy ký tự. Cho người dùng nhập vào ký tự thay thế “o” → Output: “Hollo”');
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
            newStr =""
            for(i=0;i<Str.length;i++) {
                if(Str[i] == " ") {
                    newStr+="";
                } else {
                    newStr+=Str[i];
                }
            }
            console.log(newStr);
            break;
        case 4 :
            newStr ="";
            for(i=Str.length-1;i>=0;i--) {
                newStr+=Str[i];
            }
            console.log(newStr);
            break;
        case 5:
            let count = 0;
            for(i=0;i<Str.length;i++) {
                if(isNaN(Str[i])) {
                    count++;
                }
            }
            if (count==0) {
                console.log('chuoi ko co ki tu nao la chu cai');
            } else {
                console.log(`trong chuoi co ${count} ki tu`);
            }
            break;
        case 6:
            let flag = 0;
            let searchValue = prompt('nhap gia tri ban muon tim kiem');
            newStr ="";
            for(i=0;i<Str.length;i++){
                if(searchValue == Str[i]) {
                    let newValue = prompt('nhap vao gia tri ban muon thay the');
                    newStr+=newValue
                    flag++;
                } else {
                    newStr+=Str[i];
                }

            }
            if(flag == 0) {
                console.log('gia tri ban tim ko co trong chuoi');
            } else {
                console.log(`chuoi sau khi thay the la ${newStr}`);
            }
            break;
        case 7:
            console.log('thoat chuong trinh');
            break;
        default :
            console.log('moi ban nhap lua chon hop le ');

    }
    
} while (choice != 7);

