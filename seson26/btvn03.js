let array = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];

if(array.length  < 1) {
    console.log('Du lieu khong hop le ');
} else {
    let result = array.filter(function(element,index) {
        if(element.includes("@gmail.com") || element.includes("@domain.net")) {
            return element;
        }
    });
    if(result.length === 0) {
        console.log('mang khong co phan tu nao');
    } else {
        console.log(result);
    }

}

