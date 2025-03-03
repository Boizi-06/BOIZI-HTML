let result1 = "javascrip" + 5;
console.log(result1); // "javascript5"
// Giải thích: Toán tử `+` khi có chuỗi sẽ thực hiện phép nối chuỗi. "javascript" + 5 => "javascript5".

let result2 = "javascrip" - 1;
console.log(result2); // NaN
// Giải thích: Toán tử `-` chỉ áp dụng cho số. "javascript" không thể chuyển thành số, nên kết quả là NaN (Not a Number).

let result3 = "3" + 2;
console.log(result3); // "32"
// Giải thích: "3" là chuỗi, toán tử `+` sẽ nối chuỗi thay vì tính toán. Kết quả là "32".

let result4 = "5" - 4;
console.log(result4); // 1
// Giải thích: Toán tử `-` chỉ áp dụng cho số, nên "5" được chuyển thành số 5 trước khi trừ.

let result5 = isNaN( "123");
console.log(result5); // false
// Giải thích: "123" là chuỗi nhưng có thể chuyển thành số, nên không phải NaN => `isNaN("123")` trả về false.

let result6 = isNaN("hello");
console.log(result6); // true
// Giải thích: "hello" không thể chuyển thành số, nên `isNaN("hello")` trả về true.

let result7 = Number.isNaN("123");
console.log(result7); // false
// Giải thích: "123" không phải NaN mà là chuỗi, `Number.isNaN("123")` trả về false.

let result8 = Number.isNaN(NaN);
console.log(result8); // true
// Giải thích: `Number.isNaN(NaN)` chỉ trả về true khi giá trị thực sự là NaN.
