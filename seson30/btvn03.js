let store = [];
let cart = [];

// Thêm điện thoại mới vào cửa hàng
function addPhone() {
    let phone = {
        id: Number(prompt("Nhập mã điện thoại:")),
        name: prompt("Nhập tên điện thoại:"),
        price: Number(prompt("Nhập giá điện thoại:")),
        quantity: Number(prompt("Nhập số lượng:")),
        company: prompt("Nhập hãng điện thoại:")
    };
    store.push(phone);
    console.log("Thêm điện thoại thành công!");
}

// Hiển thị danh sách điện thoại theo hãng
function showPhonesByCompany() {
    let company = prompt("Nhập tên hãng cần tìm:");
    let filteredPhones = store.filter(phone => phone.company.toLowerCase() === company.toLowerCase());
    console.log("Danh sách điện thoại của hãng:", filteredPhones);
}

// Tìm kiếm điện thoại theo tên hoặc id
function searchPhone() {
    let keyword = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
    let result = store.filter(phone => phone.name.toLowerCase().includes(keyword.toLowerCase()) || phone.id == keyword);
    console.log("Kết quả tìm kiếm:", result);
}

// Mua điện thoại
function buyPhone() {
    let id = Number(prompt("Nhập ID điện thoại muốn mua:"));
    let quantity = Number(prompt("Nhập số lượng muốn mua:"));
    
    let phone = store.find(phone => phone.id === id);
    if (phone && phone.quantity >= quantity) {
        phone.quantity -= quantity;
        let cartItem = cart.find(item => item.id === id);
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cart.push({ id: phone.id, name: phone.name, price: phone.price, quantity: quantity });
        }
        console.log("Mua hàng thành công!");
    } else {
        console.log("Không đủ số lượng hoặc điện thoại không tồn tại!");
    }
}

// Thanh toán giỏ hàng
function checkout() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống!");
    } else {
        console.log("Thanh toán thành công! Tổng tiền:", cart.reduce((total, item) => total + item.price * item.quantity, 0));
        cart = [];
    }
}

// Sắp xếp điện thoại theo giá
function sortPhones(order) {
    if (order === "asc") {
        store.sort((a, b) => a.price - b.price);
    } else {
        store.sort((a, b) => b.price - a.price);
    }
    console.log("Danh sách điện thoại sau khi sắp xếp:", store);
}

// Hiển thị tổng số tiền của các điện thoại trong kho
function totalStoreValue() {
    let total = store.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
    console.log("Tổng giá trị kho hàng:", total);
}

// Hiển thị tổng số lượng điện thoại theo hãng
function totalPhonesByCompany() {
    let companyCount = {};
    store.forEach(phone => {
        companyCount[phone.company] = (companyCount[phone.company] || 0) + phone.quantity;
    });
    console.log("Số lượng điện thoại theo hãng:", companyCount);
}



    let choice = 0;
    do {
        choice = Number(prompt('moi ban nhap lua chon'));
        switch (choice) {
            case 1:
                addPhone();
                break;
            case 2:
                showPhonesByCompany();
                break;
            case 3:
                searchPhone();
                break;
            case 4:
                buyPhone();
                break;
            case 5:
                checkout();
                break;
            case 6:
                let order = prompt("Nhập 'asc' để tăng dần, 'desc' để giảm dần:");
                sortPhones(order);
                break;
            case 7:
                totalStoreValue();
                break;
            case 8:
                totalPhonesByCompany();
                break;
            case 9:
                console.log("Thoát chương trình.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    } while (choice !== 9);


