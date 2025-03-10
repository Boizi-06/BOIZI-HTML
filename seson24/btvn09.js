let Str = "";
let choice = 0;
let newStr = "";
do {
    console.log("\n");
    console.log('==========MENU=========');
    console.log('1. Nhập chuỗ ki tu');
    console.log('2. Hiển thị chuỗi ki tu ');
    console.log('3. Đếm số lượng các ký tự là chuỗi và số trong chuỗi ký tự nhập vào ');
    console.log('4. Chuyển đổi các ký tự viết hoa → viết thường, viết thường → viết hoa trong chuỗi.');
    console.log('5. Trộn lẫn các ký tự của chuỗi gốc với chuỗi thứ 2 người dũng nhập vào. Ví dụ: "Hello", “abcdefg" → “Haeblcldoefg”i');
    console.log('6. Tách chuỗi thành các từ, sắp xếp chúng theo độ dài của từ, từ ngắn nhất đến dài nhất.');
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
            let so =0;
            let chu = 0;
            let ktdb = 0;
            for(i=0;i<Str.length;i++) {
                if(isNaN(Str[i])) {
                    chu++;
                } else if (Number(Str[i])) {
                    so ++;
                } else {
                    ktdb ++;
                }
            }
            console.log(`mang co ${chu} ki tu la chu cai | ${so} ki tu la chu so | ${ktdb} ki tu la ki tu dac biet`);
            break;
        case 4 :
            newStr ="";
            for(i=0;i<Str.length;i++) {
                if(Str[i] == Str[i].toUpperCase()) {
                    newStr += Str[i].toLowerCase();
                } else {
                    newStr += Str[i].toUpperCase();
                }
            }
            console.log(newStr);


            break;
        case 5:
            newStr = "";
            let inputStr = prompt('moi ban nhap mot chuoi nmoi');
            let lengthMax = Math.max(Str.length,inputStr.length);
            for(i=0;i<lengthMax;i++) {
                if(i<Str.length) {
                    newStr+=Str[i];
                }
                if(i<inputStr.length) {
                    newStr+=inputStr[i];
                }
            }
            console.log('chuoi sau khi da tron lan la');
            let str2 ="";
            for(i=0;i<newStr.length;i++) {
                if(newStr[i] == " ") {
                    str2+="";
                } else {
                    str2+=newStr[i];
                }
            }
            console.log(str2);
            break;
        case 6:
            newStr = Str.split(/\s+/);
            for(i=0;i<newStr.length-1;i++) {
                for(j=i+1;j<newStr.length;j++) {
                    if(newStr[i].length > newStr[j].length) {
                        let temp = newStr[i];
                        newStr[i] = newStr[j];
                        newStr[j] = temp;
                    }
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

