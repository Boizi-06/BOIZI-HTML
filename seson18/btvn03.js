let name = prompt('Nhập tên đăng nhập');
let nameTest = "ADMIN";
if (!name) {
    console.log('Cancelled');
} else if (name === nameTest) {
    let pass = prompt('Mời bạn nhập mật khẩu');
    let checkPass = "theMaster";
    if (!name) {
        console.log('Cancelled.');
    } else if (pass === checkPass) {
        console.log('Welcome');
    } else {
        console.log('Wrong password.');
    }
} else {
    console.log('I don’t know you');
}
