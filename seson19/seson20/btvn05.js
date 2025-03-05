let a = parseInt(prompt('nhap vao mot so ma ban muon luy thua'));
let b = parseInt(prompt('nhap vao mot so ly thua '));
let sum = 1;
if ((Number.isInteger(a))&& (Number.isInteger(b))) {
    for(i=0;i<Math.abs(b);i++) {
        b>0 ? sum *=a : sum /= a/1;
    }
    console.log(sum);
} else {
    console.log('nhap so hop le');
}

