let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = array.filter(function(element) {
    let uocSo = 0;
    for(i=2;i<element;i++) {
        if(element > 1) {
            if(element % i === 0) {
                uocSo++;
            }
        } else {
            break;
        }
        
    }
    if(uocSo == 0) {
        return element;
    }
   
    
});
if(result.length === 0) {
    console.log('mang khong co phan tu nao');
} else {
    console.log(result);
}