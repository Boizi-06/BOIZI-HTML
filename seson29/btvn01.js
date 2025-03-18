let concat = [] ;
let choice = 0;
let numberOfaccounts = 0;
let maxAccounts = 0;
function addConcat (concat) {
    let nameConcatinput = prompt('moi ban nhap ten cua nguoi dung');
    let emailConcatinput = prompt('moi ban nhap email sinh vien');
    let phoneConcatinput = prompt('moi ban nhap so dien thoai nguoi dung');
    const newConcat = {
        id : Math.floor(Math.random()*100),
        name : nameConcatinput,
        email : emailConcatinput,
        phone : phoneConcatinput,
    };
    concat.push(newConcat);
    console.log('nhap nguoi dung thanh cong');
}
function searchConcatforphone (concat) {
    let count = 0;
    let findConcatforphone = prompt('moi ban nhap so dien thoai muon tim kiem');
    for(i=0;i<concat.length;i++) {
        if(concat[i].phone == findConcatforphone) {
            console.log(concat[i]);
        } else {
            count ++;
        }
    }
    if(count == concat.length) {
        console.log('khong tim thay nguoi dung co so dien thoai tren');
    }
}
function updateConcatforif (concat) {
    let count = 0;
    let findConcatforid = Number(prompt('moi ban nhap id cua nguoi dung ma ban muon sua'));
    for(i=0;i<concat.length;i++) {
        if(concat[i].id == findConcatforid) {
            let updateName = prompt('moi ban nhap ten moi');
            concat[i].name = updateName;
            let updateEmail = prompt('moi ban nhap Email');
            concat[i].email = updateEmail;
            let updatePhone = prompt('moi ban nhap soo dien thoai');
            concat[i].phone = updatePhone;
            return;
        } else {
            count++;
        }
    }
    if(count == concat.length) {
        console.log('id ko ton tai');
    }
}
function deleteConcatforid (concat) {
    let count = 0;
    let findConcatforid = Number(prompt('moi ban nhap id cua nguoi dung ma ban muon sua'));
    for(i=0;i<concat.length;i++) {
        if(concat[i].id == findConcatforid) {
            concat.splice(i,1);
            console.log(concat);
            return;
        } else {
            count++;
        }
    }
    if(count == concat.length) {
        console.log('id ko ton tai');
    }
}


do {
//     Thêm đối tượng Contact vào danh sách liên hệ.
// Hiển thị danh sách danh bạ.
// Tìm kiếm thông tin Contact theo số điện thoại.
// Cập nhật thông tin Contact(name, email, phone) theo id.
// Xóa một đối tượng Contact  khỏi danh sách danh bạ theo id.
// Thoát.
    choice = Number(prompt('moi ban nhap lua chon'));

    switch(choice) {
        case 1:
            addConcat (concat);
            
            break;
        case 2:
            console.log(concat);
            break;
        case 3 :
            searchConcatforphone (concat);
            break;
        case 4 :
            updateConcatforif (concat);
            break;
        case 5 :
            deleteConcatforid (concat);
            break;
        case 6 :
            break;
        default :
            console.log('thoat');


    }

} while (choice != 6) 