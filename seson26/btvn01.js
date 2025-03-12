let array= ["a","b","c"];
let resault = array.filter(function(element,index) {
    if(!isNaN(element)) {
        return -1;
    } else {
        return element >= 10;
    }
    
});
if(resault == false) {
    console.log('mang ko hop le ');
} else if (resault.length == 0) {
    console.log('mang khong co phan tu nao')
} else {
    console.log(resault);
}
