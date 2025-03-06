let a = prompt('moi ban nhap vao mot day so bat ki');
let b = [];
max = a[0];
if (Number.isInteger(Number(a))) {
    for(i=0 ; i <a.length ; i++) {
        if(max < a[i]) {
            max = a[i];
        }
    }
    console.log(max);
} else {
    console.log('nhap so hop le');
}