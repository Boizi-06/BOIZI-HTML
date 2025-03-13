// Viết một function kiểm tra xem một mảng số nguyên có phải là dãy số cấp số cộng hay không (chênh lệch giữa các phần tử liên tiếp là không đổi).




let array = [1,2,3,4,5,6,7,8,9,10];

if(arithmeticProgression (array) != false) {
    console.log('day la cap so cong');
} else {
    console.log('day  khong la cap so cong');
}
function arithmeticProgression (array) {
    let step = array[1]- array[0];  
    for(i=2;i<array.length;i++) {
        if(array[i] - step != array[i-1]) {
            console.log(array[i],array[i-1]);
            return false;
        } 
    }
    return true;
}