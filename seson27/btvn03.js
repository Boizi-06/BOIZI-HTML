// Xây dựng menu tính toán hình học, gồm các chức năng:



let r = 0;
const pi = 3.14;
let dai =0;
let rong = 0;
do {
    console.log("1 Tính diện tích hình tròn.\n 2.Tính chu vi hình tròn.\n 3.Tính diện tích hình chữ nhật.\n 4.Tính chu vi hình chữ nhật./n 5.Thoát.");
    
        
        
            choice = Number(prompt('moi ban nhap lua chon'));
            switch (choice) {
                case 1 :
                    r = Number(prompt('moi ban nhap ban kinh'));
                    console.log('dien tich hinh tron la ');
                    console.log(Math.sqrt(r)*pi);
                    break;
                case 2 :
                    r = Number(prompt('moi ban nhap ban kinh'));
                    console.log('chu vi hinh tron la ');
                    console.log(2*r*pi);
                    break;
                case 3 :
                    dai = Number(prompt('chieu dai'));
                    rong = Number(prompt('chieu rong'));
                    console.log('chu vi hinh chu nhat la ');
                    console.log((dai+rong) * 2);
                    break;
                case 4 :
                    dai = Number(prompt('chieu dai'));
                    rong = Number(prompt('chieu rong'));
                    console.log('dien tich hinh chu nhat la ');
                    console.log(dai*rong);
                    break;
                case 5:
                
                    break;
                default :
                    console.log('lua chon khong hop le ');
    
            }
        
        
  
    
    



} while (choice != 5);

    