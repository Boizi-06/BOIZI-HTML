let listBook = [];
let cart = [];
let choice = 0;

function addBooktolistBook (listBook) {
    
    const newBook = {
        id : listBook.length+1,
        Name : prompt('moi ban nhap ten sach'),
        price : Number(prompt('moi ban nhap gia tien cua sach')),
        quantity : Number (prompt('moi ban nhap so luong sach')),
        category : prompt('moi ban nhap the loai sach'),
    }
    listBook.push(newBook);
    
    console.log('them sach vao kho thanh cong');
}

function showBooktoCategory (listBook) {
    if(listBook.length==0) {
        console.log('cua hang chua co quyen sach nao');
        return;
    } else {
        let count =0;
        let inputCategory = prompt('moi ban nhap the loai cua sach');
        for(i=0;i<listBook.length;i++) {
            if(listBook[i].category == inputCategory) {
                console.log(listBook[i]);
            } else {
                count ++;
            }
        }
        if(count == listBook.length) {
            console.log('khong co sach nao thuoc the loai tren');
        }
    }
   
}


function searchBooktoIDofNAME (listBook) {
    let count =0;
    let inputIDofNAME = prompt('moi ban nhap id hoac ten sach ma ban muon tim');
    for(i=0;i<listBook.length;i++) {
        if(listBook[i].id==inputIDofNAME || listBook[i].Name==inputIDofNAME) {
            console.log(listBook[i]);
        } else {
            count++;
        }
    }
    if(count == listBook.length) {
        console.log('sach ban tim khong co trong gio hang');
    }
}

function buyBooktoListBook (listBook,cart) {
    let inputId = Number (prompt('moi ban nhap id san pham ban muon mua'));
    if(Number.isInteger(inputId) != true) {
        console.log ('du lieu nhap vao khong hop le ');
    } else {
        let indexBook = listBook.findIndex(num=>num.id==inputId);
        if(indexBook == -1) {
            console.log('khong co san pham nao co id nhu tren');
        } else {
            let buyNumber = Number(prompt ('nhap so luong sach ban muon mnua'));
            if(Number.isInteger(buyNumber) != true) {
                console.log ('du lieu nhap vao khong hop le ');
            } else {
                if(listBook[indexBook].quantity < buyNumber) {
                    console.log('cua hang khong du sach');
                } else {
                    listBook[indexBook].quantity-=buyNumber;
                    const buyBook = {
                        id :listBook[indexBook].id,
                        Name : listBook[indexBook].Name,
                        price :listBook[indexBook].price,
                        quantity : buyNumber,
                        category : listBook[indexBook].category,
                    }
                    cart.push(buyBook);
                    console.log('mua hang thanh cong');
                }
            }
        }
    }
}


function sortBooktoPrice (listBook) {
    console.log('moi ban chon cach xap xep');
    console.log('2 tang dan');
    console.log("1.giam dan");
    let choiceSort = 0;
    choiceSort = Number(prompt('moi ban nhap lua chon'));
    let n = listBook.length;
    if(choiceSort == 2) {
        for(i=0;i<n-1;i++) {
            let min = i;
            for(j=i+1;j<n;j++) {
                if(listBook[j].price > listBook[min].price) {
                    min = j;
                }
            }
            if(min!= i) {
                let temp = listBook[i];
                listBook[i] = listBook[min];
                listBook[min] = temp;
            }
        }
        console.log(listBook);
    } else if (choiceSort == 1) {
        for(i=0;i<n-1;i++) {
            let min = i;
            for(j=i+1;j<n;j++) {
                if(listBook[j].price < listBook[min].price) {
                    min = j;
                }
            }
            if(min!= i) {
                let temp = listBook[i];
                listBook[i] = listBook[min];
                listBook[min] = temp;
            }
        }
        console.log(listBook);
    } else  {
        console.log('lua chon khong hop le');
    }
}

function sumBookbuytocard (cart) {
    let sum = 0;
    let bookNumber = 0;
    let n = cart.length;
    for(i=0;i<n;i++) {
        sum += cart[i].price * cart[i].quantity;
        bookNumber += cart[i].quantity;
    }
    console.log(`so tien phai thanh toan la ${sum} cho ${bookNumber} quyen sach`);
}
function displayListbook (listBook) {
    let n = listBook.length;
    for(i=0;i<n;i++) {
        console.log(listBook[i]);
    }
}

// yêu cầu:
// Hiển thị danh sách sách theo thể loại (Người dùng chọn thể loại để xem sách trong danh mục đó).
// Thêm sách mới vào kho
// Tìm kiếm sách theo tên hoặc id.
// Mua sách (Nhập id sách cần mua và số lượng, cập nhật lại kho).
// Sắp xếp sách theo giá:
// Tăng dần.
// Giảm dần.
// Tính tổng số lượng sách đã mua và in ra tổng tiền trong giỏ hàng
// Hiển thị tổng số lượng sách trong kho.
// Thoát chương trình.


do {
    choice = Number(prompt('moi ban nhap luu chon'));
    switch (choice) {
        case 1:
            showBooktoCategory (listBook);
            break;
        case 2:
            addBooktolistBook (listBook);
            break;
        case 3:
            searchBooktoIDofNAME (listBook);
            break;
        case 4:
            buyBooktoListBook (listBook,cart);
            break;
        case 5:
            sortBooktoPrice (listBook);
            break;
        case 6:
            sumBookbuytocard (cart);
            break;
        case 7:
            displayListbook (listBook);
            break;
        case 8:
            console.log('thoat chuong trinh');
            break;
        default:
            break;
    }
} while (choice !=8);