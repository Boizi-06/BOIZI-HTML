let a = Number(prompt('nhap vao so phan tu ban muon them vao mang'));
let array = [];
for ( i=0 ; i<a ; i++) {
    array[i] = Number(prompt(`nhap phan tu thu ${i+1}`));

}
let num = [];
let count = 0;
for(j=0; j<array.length ; j++ ) {
    if(array[j] > 10) {
        num.push(array[j]);
        count++;
    }
}if(count > 0) {
    console.log(`cac so lon hon 10 la ${num}`);

} else {
    console.log('ko cao phan tu nao lon hon 10 trong mang');
}