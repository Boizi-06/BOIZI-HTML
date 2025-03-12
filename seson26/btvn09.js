function sumEvenOdd(arr) {
    console.log("Dữ liệu đầu vào:", arr);
    if (!Array.isArray(arr) || arr.some(item => typeof item !== 'number')) {
        console.log("Dữ liệu không hợp lệ");
        return;
    }
    
    if (arr.length === 0) {
        console.log("Mảng không có dữ liệu");
        return;
    }
    
    const totalEven = arr.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
    const totalOdd = arr.filter(num => num % 2 !== 0).reduce((sum, num) => sum + num, 0);
    
    console.log("totalEven =", totalEven);
    console.log("totalOdd =", totalOdd);
    console.log("------------------");
}


sumEvenOdd([1, 2, 3, 4, 5, 6, 7, 8, 9]);
sumEvenOdd([]);
sumEvenOdd("abc");
sumEvenOdd([10, 20, 30, 40]);
sumEvenOdd([1, 3, 5, 7, 9]);
