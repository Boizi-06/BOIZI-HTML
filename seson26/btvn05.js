// Nhập mảng 10 số nguyên từ người dùng
let numbers = [];
for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Nhập số thứ ${i + 1}:`));
    numbers.push(num);
}

// Tìm số lớn nhất bằng forEach
let maxNumber = numbers[0];
numbers.forEach(num => {
    if (num > maxNumber) {
        maxNumber = num;
    }
});

// Tìm vị trí của số lớn nhất bằng map và filter
let maxIndexes = numbers
    .map((num, index) => (num === maxNumber ? index : -1)) // Đánh dấu vị trí của maxNumber
    .filter(index => index !== -1); // Loại bỏ các giá trị -1 (vị trí không hợp lệ)

// Hiển thị kết quả
console.log("Mảng đã nhập:", numbers);
console.log(`Số lớn nhất: ${maxNumber}`);
console.log(`Vị trí của số lớn nhất: ${maxIndexes.join(", ")}`);
