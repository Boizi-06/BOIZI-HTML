let products= [ ["banh khoai", 5, 5000], ["banh mi", 12, 15000], ["banh bao", 5, 8000], ["banh chuoi", 30, 20000]];
let cart=[];
let choice = 0;
let newprd = 0;



do {
    console.log("\n");
    console.log("1Xem danh sách sản phẩm có sẵn trong cửa hàng.");
    console.log("2.Chọn sản phẩm để mua bằng cách nhập tên sản phẩm");
    console.log("3.Tính tổng tiền và hiển thị hóa đơn.");
    console.log("4.thoat");
    console.log("\n");
    choice = Number(prompt('nhap lua chon'));
    switch(choice) {
        case 1:
            for(i=0;i<products.length;i++) {
                console.log(products[i]);
            }
           
            break;
        case 2:
            let searchfood = prompt('moi ban nhap ten mon an ');
            let coutIndexcart = searchFood(products,searchfood);
            if(coutIndexcart!=-1) {
                let sreachCart = checkCart(cart,products[coutIndexcart]);
                if(sreachCart == -1){
                    cart.push([products[coutIndexcart][0],1,products[coutIndexcart][2]]);
                } else {
                    cart[sreachCart][1] += 1;
               
                }
            } else {
                break;
            }
            console.log('da them vao gio hang');
            break;
        case 3 :
            for(i=0;i<cart.length;i++) {
                console.log(cart[i]);
            }
            if (cart.length === 0) {
                console.log(" Giỏ hàng trống!");
            } else {
                console.log("\n Hóa đơn mua hàng:");
                let price = 0;
                for (let i = 0; i < cart.length; i++) {
                    let itemPrice = cart[i][1] * cart[i][2];
                    price += itemPrice;
                    console.log(`${cart[i][0]}Số lượng: ${cart[i][1]}Tổng: ${itemPrice} VND`);
                }
               
                console.log(` Tổng tiền: ${price} VND`);
            }
           
           
            break;
        case 4:
            break;
        default :
            console.log('nhap lai lua chon');
    }
} while(choice!= 4);

function searchFood (arr1,prom) {
    
    let indexFood = -1;
    for(i=0;i<arr1.length;i++) {
        if(prom == arr1[i][0]) {
            indexFood=i;
            
        } 
    }
    if(indexFood  == -1 || arr1[indexFood][1] < 1) {
        console.log('san pham khong ton tai');
        return -1;
    } else {
        arr1[indexFood][1] -=1;
        return indexFood;
    }
}
function checkCart (arr,monAn) {
    for(i=0;i<arr.length;i++) {
        if(arr[i][0] == monAn[0]) {
           
            return i;
        }
    }
    return -1;
    
}