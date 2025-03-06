let a = [1,2,3,4,5];
let soChan = 0;
let soLe = 0;
for (i =0 ; i<a.length ; i++) {
    if(a[i] % 2 == 0) {
        soChan+=a[i];
    } else {
        soLe+=a[i];
    }
}
console.log(`tong so chan la ${soChan} tong so le la ${soLe}`);
