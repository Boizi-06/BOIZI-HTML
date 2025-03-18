let listBook = [];
let choice = 0;

 
function addNewbook (listBook) {
    let nameBook = prompt('moi ban nhap ten sach');
    let priceBook = prompt('moi ban nhap gai san phan');
    let categoryBook = prompt("moi ban nhap danh muc san pham");
    let quantityBook = prompt('moi ban nhap so luong san pham trong kho');
    const newBook = {
        id : Math.floor(Math.random() * 99),
        name : nameBook,
        price : priceBook,
        category :categoryBook,
        quantity :quantityBook,
    };
    listBook.push(newBook);
    console.log('nhap san phan thanh cong');
}
function displayBook (listBook) {
    console.log(listBook);
}
function findBookforid (listBook) {
    let count = 0;
    let findIdtolistbook = Number(prompt('moi ban nhap id cua sach muon tim kiem'));
    for(i=0;i<listBook.length;i++) {
        if(listBook[i].id == findIdtolistbook) {
            console.log(listBook[i]);
            return;
        } else {
            count ++;
        }
    }
    if(count == listBook.length) {
        console.log(`khong tim thay san pham co id ${findIdtolistbook}`);
    }
}

function updateBooktoid (listBook) {
    let count = 0;
    let findIdtolistbook = Number(prompt('moi ban nhap id cua sach muon tim kiem'));
    for(i=0;i<listBook.length;i++) {
        if(listBook[i].id == findIdtolistbook) {
            let updateNamebook = prompt('moi ban cap nhat lai ten sach');
            listBook[i].name = pdateNamebook;
            let updatePricebook = prompt('moi ban cap nhat gia tien san pham');
            let updateCategorybook = prompt('moi ban cap nhat danh muc san pham');
            let updateQuantitybook = prompt('moi ban cap nhat lai so luong san pham trng kho');
            return;
        } else {
            count ++;
        }
    }
    if(count == listBook.length) {
        console.log(`khong tim thay san pham co id ${findIdtolistbook}`);
    }
}

function deleteBooktoid (listBook) {
    let count = 0;
    let inputId = Number(prompt('moi ban nhap is cua sach muon tim kiem'));
}


do {
//     Thêm sản phẩm vào danh sách sản phẩm.
// Hiển thị tất cả sản phẩm.
// Hiển thị chi tiết sản phẩm theo id.
// Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
// Xóa sản phẩm theo id.
// Lọc sản phẩm theo khoảng giá.
// Thoát.

    switch (choice) {
       
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            console.log('thoat chuong trinh');
            break;
        default:
            console.log('moi ban nhap laij lua chon');
    }
} while (choice != 6);