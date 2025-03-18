let products = [
    {
        id: 1,
        name: "mèn mén",
        price: 20000,
        quantity: 20,
         // so luong san pham;
        category: "món ăn dân tộc Mông",
    },
    {
        id: 2,
        name: "mứt",
        price: 80000,
        quantity: 21,
         // so luong san pham;
        category: "món ăn dân tộc Kinh",
    },
    {
        id: 3,
        name: "cơm lam",
        price: 40000,
        quantity: 15,
         // so luong san pham;
        category: "món ăn dân tộc Mông",
    },
    {
        id: 4,
        name: "bánh đậu xanh",
        price: 60000,
        quantity: 30,  
        // so luong san pham;
        category: "món ăn dân tộc Kinh",
    }
];
let choice = 0;
let cards = [];



function displayProducts (products) {
    for(i=0;i<products.length;i++) {
        console.log(products[i]);
    }
}
function displaycasrd (cards) {
    for(i=0;i<cards.length;i++) {
        console.log(cards[i]);
    }
}

// ham hien thi mon an
function displayFoodtocategory (products) {
    let count = 0;
    let searchCategory = prompt('moi ban nhap danh muc muon tim kiem');
    for(i=0;i<products.length;i++) {
        if(products[i].category === searchCategory) {
            console.log(products[i]);
        } else {
            count ++;
        }
    }
    if(count==products.length) {
        console.log('danh muc ban nhap vao kco trong cua hang');
    }
}
// ham mua mon an

function searchFoodtoID (products) {
    let idFood =  Number(prompt('moi ban nhap id cua mon an ma ban muon tim kiem'));
    let indexFood = products.findIndex(num => num.id == idFood);
    if(indexFood != -1) {
        let quantityFood = Number(prompt('moi ban nhap so luong mon an muon mua'));
        if(Number.isInteger(quantityFood) != false) {
            let soMonanconLai = products[indexFood].quantity > quantityFood
            if(products[indexFood].quantity > quantityFood) {
                products[indexFood].quantity-=quantityFood;
                cards.push({
                    id: products[indexFood].id,
                    name: products[indexFood].name,
                    price: products[indexFood].price,
                    quantity: quantityFood,
                    category: products[indexFood].category
                });
                
                console.log('mua hang thanh cong');
            } else {
                console.log('so luong mon an khong du de ban mua');
            }
        } else {
            console.log('so luong mon an nhap vao khong hop le ');
        }
    } else {
        console.log("id san pham ban tim ko co trong gio hang");
    }
}

function sortMenutoprice (products) {
    let choiceSort = Number(prompt('moi ban chon cach xap xep'));
    console.log('chon cach xap xep');
    console.log('     1.Tăng dần.');
    console.log('     2.Giảm dần.');
    if(choiceSort == 1) {
        for(i=0;i<products.length-1;i++) {
            let minIndex = i;
            for(j=i+1;j<products.length;j++) {
                if(products[j].price < products[minIndex].price) {
                    minIndex=j;
                }
            }
            if(minIndex!=i) {
               let temp = products[i];
               products[i] = products[minIndex];
               products[minIndex] = temp;
            }
        }
        displayProducts (products);
    } else if ( choiceSort == 2) {
        for(i=0;i<products.length-1;i++) {
            let minIndex = i;
            for(j=i+1;j<products.length;j++) {
                if(products[j].price > products[minIndex].price) {
                    minIndex=j;
                }
            }
            if(minIndex!=i) {
               let temp = products[i];
               products[i] = products[minIndex];
               products[minIndex] = temp;
            }
        }
        displayProducts (products);
    } else {
        console.log('lua chon khong hop le');
    }
}


function numPricetoCards (cards) {
    let sum = 0;
    for(let i=0; i<cards.length; i++) {
        sum += cards[i].price * cards[i].quantity;
    }
    if(sum == 0) {
        console.log('Giỏ hàng chưa có sản phẩm nào.');
    } else {
        console.log('Tổng số tiền cần thanh toán: ' + sum + ' VND');
    }
}




// 1Hiển thị các sản phẩm theo tên danh mục.
// 2Chọn sản phẩm để mua bằng cách nhập id sản phẩm.
//      A.Sản phẩm không có trong cửa hàng hiển thị thông báo.
//      B.Sản phẩm có trong cửa hàng
//          i. Cho người dùng nhập số lượng sản phẩm muốn mua, mua thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
//          ii.Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển thị thông báo.
// 3.Sắp xếp các sản phẩm trong cửa hàng theo giá:
//      a.Tăng dần.
//      b.Giảm dần.
// 4.Tính số tiền thanh toán trong giỏ hàng.
// 5Thoát.



do {
  
    choice = Number(prompt('moi ban nhap lua chon'));
    switch (choice) {
        case 1: 
            displayProducts(products);
            break;
        case 2:
            displaycasrd(cards);
            break;
        case 3:

            displayFoodtocategory (products);
            break;
        case 4:
            searchFoodtoID (products);
            break;
        case 5:
            sortMenutoprice (products);
            break;
        case 6 :
            displaycasrd(cards);
            numPricetoCards (cards);
            break;
        case 7:
            console.log('thoat chung trinh');
            break;
        default:
            break;
    }

} while (choice != 7);