let a = Number(prompt('nhap so phan tu ban muon them vao mang'));
let array = [];
for(i=0;i<a;i++) {
    array[i] = Number(prompt(`nhap phan tu thu ${i+1}`));
}
let max = array[0];
let so = 0;
let vitri = 0;
let count =0;
for (i=0;i<array.length ; i++) {
    if(max< array[i]) {
        max = array[i];
        vitri = i;
        count++
    }
}
if(count  > 0) {
    console.log(`so lon nhat trong mang la ${max} va vi tri cua no l;a ${vitri}`);
} else {
    console.log('khong co so lan nhat trong mang');
}
