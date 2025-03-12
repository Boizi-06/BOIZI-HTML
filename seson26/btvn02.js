let array = ["apple", "banana", "cat", "elephant", "dog"];

if(array.length  < 1) {
    console.log('Du lieu khong hop le ');
} else {
    let result = array.filter(function (element,index) {
        if(element.length > 5) {
            return element;
        }
    });
    if(result.length === 0) {
        console.log('mang khong co phan tu nao');
    } else {
        console.log(result);
    }
}
