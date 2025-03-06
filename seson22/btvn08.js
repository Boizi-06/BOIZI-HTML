let a = Number(prompt('moi ban nhap vao so phan tu muon them vao mnang'));
let array = [];
for(i=0; i<a ; i++) {
    array[i] = Number(prompt(`nhap phan tu thu ${i+1}`));
}

let count = 0;
let maxCount =0;
let soXuathien = 0;
for (i=0 ; i<array.length - 1 ; i++) {
    count=1;
    for(j= 1  ; j < array.length ; j++) {
        if(array[i]==array[j]) {
            count++;
        }
    }
   
    if(count>maxCount) {
        maxCount=count;
        soXuathien=array[i];
    }
}
console.log(`so xuat hien nhieu nhat la ${soXuathien}`);
