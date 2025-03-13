// . Mục tiêu
// Nắm được cách khai báo và sử dụng hàm.

 

// 2. Mô tả
// Xây dựng menu quản lý sinh viên, gồm các chức năng:

// Nhập danh sách sinh viên.
// Cho người dùng nhập số lượng số sinh viên, nhập lần lượt tên đầy đủ từng sinh viên.
// Hiển thị danh sách sinh viên.
// Tìm sinh viên theo tên.
// Cho người dùng nhập tên sinh viên cần tìm kiếm, hiển thị tên đầy đủ sinh viên nếu tìm thấy, trong trường hợp không tìm thấy sinh viên thông báo sinh viên không có trong danh sách .
// Xóa sinh viên khỏi danh sách.
// Cho người dùng nhập tên sinh viên cần xóa, trong trường hợp có nhiều sinh viên trùng tên thì xóa sinh viên đầu tiên.
// Thoát.
 

// 3. Đánh giá
// Để hoàn thành bài thực hành, học viên cần:

// Đưa mã nguồn lên GitHub.
// Dán link của repository lên phần nộp bài trên hệ thống.

let array = [] ;
let choice = 0;
let accCount = 0;
let a= 0;

function searchStudents (array) {
    let students = prompt('moi ban nhap ten sinh vien muon tim kiem');
    if(array.includes(students)) {
        return students;
    } else {
        return -1;
    }
}
function deleteStudents (array) {
    let students = prompt('moi ban nhap ten sinh vien muon xoa');
    let indexDelete = array.indexOf(students);
    if(indexDelete != -1) {
        return array.splice((indexDelete,1));
    } else {
        console.log('khong thay sinh vien');
        return -1;
    }
}



do {
    console.log("\n Nhập danh sách sinh viên.\nCho người dùng nhập số lượng số sinh viên, nhập lần lượt tên đầy đủ từng sinh viên.\n2.Hiển thị danh sách sinh viên.\n 3.Tìm sinh viên theo tên.\n 4.Cho người dùng nhập tên sinh viên cần tìm kiếm, hiển thị tên đầy đủ sinh viên nếu tìm thấy, trong trường hợp không tìm thấy sinh viên thông báo sinh viên không có trong danh sách .\n 5.Xóa sinh viên khỏi danh sách.Cho người dùng nhập tên sinh viên cần xóa, trong trường hợp có nhiều sinh viên trùng tên thì xóa sinh viên đầu tiên.\n 6.Thoát.");
    choice = Number(prompt('moi ban nhap lua chon'));
    switch (choice) {
        case 1 :
            accCount =  Number(prompt('moi ban nhap so luong sinh vien muon them vao mang'));
            for(i=a;i<accCount+a;i++) {
                array[i] = prompt(`moi ban nhap ten sinh vien thu ${i+1}`);
            }
            a+=accCount;
            break;
        case 2 :
            console.log(array);
            break;
        case 3 :
            console.log(searchStudents (array));
            break;
        case 4 :
            console.log(deleteStudents (array));
            break;
        case 5:
            console.log('thoat chuong trinh');
            break;
        default :
            console('lua chon khong hop le ');

    }



} while (choice != 5);


