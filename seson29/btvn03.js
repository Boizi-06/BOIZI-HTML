let listDanhmuc = []; 


function addDanhmuc() {
    let danhMuc = prompt("Mời bạn nhập danh mục món ăn:");
    

    if (listDanhmuc.some(d => d.name === danhMuc)) {
        console.log("Danh mục đã tồn tại!");
        return;
    }

    listDanhmuc.push({ name: danhMuc, foods: [] });
    console.log("Thêm danh mục thành công!");
}

function addMonAn() {
    let danhMuc = prompt("Mời bạn nhập danh mục muốn thêm món ăn:");
    
    let category = listDanhmuc.find(d => d.name === danhMuc);
    
    if (!category) {
        console.log("Danh mục không tồn tại!");
        return;
    }

    let newMonan = {
        name: prompt("Mời bạn nhập tên món ăn:"),
        price: prompt("Mời bạn nhập giá tiền:"),
        description: prompt("Mời bạn nhập mô tả món ăn:")
    };

    category.foods.push(newMonan);
    console.log("Thêm món ăn thành công!");
}


function deleteFoodForCategory() {
    let danhMuc = prompt("Mời bạn nhập danh mục muốn xóa món ăn:");
    let category = listDanhmuc.find(d => d.name === danhMuc);
    
    if (!category) {
        console.log("Danh mục không tồn tại!");
        return;
    }

    let nameDeleteFood = prompt("Mời bạn nhập tên món ăn muốn xóa:");
    let indexFood = category.foods.findIndex(f => f.name === nameDeleteFood);

    if (indexFood !== -1) {
        category.foods.splice(indexFood, 1);
        console.log("Xóa món ăn thành công!");
    } else {
        console.log("Món ăn không tồn tại trong danh mục!");
    }
}


function updateFoodToListMenu() {
    let danhMuc = prompt("Mời bạn nhập danh mục muốn cập nhật món ăn:");
    let category = listDanhmuc.find(d => d.name === danhMuc);
    
    if (!category) {
        console.log("Danh mục không tồn tại!");
        return;
    }

    let nameUpdateFood = prompt("Mời bạn nhập tên món ăn muốn cập nhật:");
    let food = category.foods.find(f => f.name === nameUpdateFood);

    if (food) {
        food.name = prompt("Mời bạn nhập tên mới:") || food.name;
        food.price = prompt("Mời bạn nhập giá mới:") || food.price;
        food.description = prompt("Mời bạn nhập mô tả mới:") || food.description;
        console.log("Cập nhật món ăn thành công!");
    } else {
        console.log("Món ăn không tồn tại trong danh mục!");
    }
}


function displayMenu() {
    if (listDanhmuc.length === 0) {
        console.log("Menu trống!");
        return;
    }

    console.log("======= MENU =======");
    listDanhmuc.forEach(category => {
        console.log(` Danh mục: ${category.name}`);
        if (category.foods.length === 0) {
            console.log("  (Không có món ăn nào)");
        } else {
            category.foods.forEach(food => {
                console.log(`   ${food.name} - ${food.price} VND`);
                console.log(`      Mô tả: ${food.description}`);
            });
        }
        console.log("--------------------");
    });
}

// ✅ Tìm kiếm món ăn theo tên
function searchFoodToMenu() {
    let searchFood = prompt("Mời bạn nhập tên món ăn muốn tìm kiếm:");

    let found = false;
    listDanhmuc.forEach(category => {
        let food = category.foods.find(f => f.name === searchFood);
        if (food) {
            console.log(` Món ăn '${searchFood}' có trong danh mục '${category.name}':`);
            console.log(`   - Giá: ${food.price} VND`);
            console.log(`   - Mô tả: ${food.description}`);
            found = true;
        }
    });

    if (!found) {
        console.log("Món ăn bạn tìm không có trong menu!");
    }
}



    let choice;
    do {
        choice = prompt(
            "Chọn chức năng:\n" +
            "1. Thêm danh mục\n" +
            "2. Thêm món ăn vào danh mục\n" +
            "3. Xóa món ăn khỏi danh mục\n" +
            "4. Cập nhật món ăn\n" +
            "5. Hiển thị menu\n" +
            "6. Tìm kiếm món ăn\n" +
            "7. Thoát\n" +
            "Nhập số: "
        );

        switch (choice) {
            case "1":
                addDanhmuc();
                break;
            case "2":
                addMonAn();
                break;
            case "3":
                deleteFoodForCategory();
                break;
            case "4":
                updateFoodToListMenu();
                break;
            case "5":
                displayMenu();
                break;
            case "6":
                searchFoodToMenu();
                break;
            case "7":
                console.log("Thoát chương trình!");
                break;
            default:
                console.log("Lựa chọn không hợp lệ, vui lòng nhập lại!");
        }
    } while (choice !== "7");



