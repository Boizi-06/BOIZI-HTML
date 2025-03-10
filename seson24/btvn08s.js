let Str = "";
let choice = 0;
let newStr = "";
do {
    console.log("\n");
    console.log('==========MENU=========');
    console.log('1. Nhập chuỗ ki tu');
    console.log('2. Hiển thị chuỗi ki tu ');
    console.log('3. Tìm tất cả các từ con trùng lặp trong chuỗi và số lần xuất hiện');
    console.log('4. Tìm các từ có độ dài lớn nhất và nhỏ nhất trong chuỗi');
    console.log('5. Tìm số lần xuất hiện nhiều nhất của các ký tự trong chuỗi');
    console.log('6. Chuyển đổi chuỗi ký tự thành dạng snake_case');
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
            let count = 0;
            for(i=0;i<Str.length-1;i++){
                count = 0;
                for(j=i+1;j<Str.length;j++) {
                    if(Str[i] == Str[j]) {
                        count++;   
                    }
                }
                if(count!=0) {
                    console.log(`phan tu ${Str[i]} xuat hien ${count+1} lan`);
                }
            }
            break;
        case 4 :
            newStr = Str.split(/\s+/);
            let min = newStr[0].length;
            let strMin = newStr[0];
            let strMax = newStr[0];
            let max  = newStr[0].length;
            for(i=1;i<newStr.length;i++) {
                if(min>newStr[i].length) {
                    min = newStr[i].length;
                    strMin = newStr[i];
                }
                if (max < newStr[i].length){
                    max = newStr[i].length;
                    strMax = newStr[i];
                }
            }
            console.log(`chuoi ngan nhat la ${strMin}`);
            console.log(`chuoi dai nhat la ${strMax}`);


            break;
        case 5:
            let count1 = 0;
            let maxCount = 0;
            let indexCount = 0;
            for(i=0;i<Str.length-1;i++) {
                for(j=i+1;j<Str.length;j++) {
                    if(Str[i] == Str[j]) {
                        count1++;
                    }
                }
                if(count1>maxCount) {
                    maxCount = count1;
                    indexCount = Str[i];
                }
            }
            console.log(`gia tri ${indexCount} xuat hien nhieu nhat ${maxCount} lan `);
            break;
        case 6:
            newStr ="";
            for(i=0;i<Str.length;i++){
                if(Str[i] ==  " ") {
                    newStr+="_";
                } else {
                    newStr+= Str[i];
                }
            }
            console.log(newStr.toLowerCase());
          break;
        case 7:
            console.log('thoat chuong trinh');
            break;
        default :
            console.log('moi ban nhap lua chon hop le ');

    }
    
} while (choice != 7);

