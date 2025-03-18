const users = [];

function validateEmail(email) {
    return email.includes("@") && (email.includes(".com") || email.includes(".vn"));
}

function validatePassword(password) {
    return password.length >= 6 && password.includes(".") && password.split('').some(char => char >= 'A' && char <= 'Z');
}

function register() {
    let name = prompt("Nhập tên:");
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");

    if (!validateEmail(email)) {
        console.log("Email không hợp lệ!");
        return;
    }
    if (!validatePassword(password)) {
        console.log("Mật khẩu phải có ít nhất 6 ký tự, chứa ký tự viết hoa và ký tự đặc biệt!");
        return;
    }
    if (users.some(user => user.email === email)) {
        console.log("Email đã tồn tại!");
        return;
    }
    users.push({ name, email, password });
    console.log("Đăng ký thành công!");
}

function login() {
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");

    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        console.log("Đăng nhập thành công!");
        console.log("Thông tin người dùng:", user);
    } else {
        console.log("Email hoặc mật khẩu không đúng!");
    }
}

function logout() {
    console.log("Đã đăng xuất!");
}


while (true) {
    let choice = prompt("Chọn chức năng: 1. Đăng ký  2. Đăng nhập  3. Thoát");
    if (choice === "1") {
        register();
    } else if (choice === "2") {
        login();
    } else if (choice === "3") {
        logout();
        break;
    } else {
        console.log("Lựa chọn không hợp lệ!");
    }
}
