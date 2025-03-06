let a = Number(prompt('nhap so luong phan tu cua mnag so nguyen ban muon khai bao'));
let array = [];
for ( i=0 ;i<a;i++) {
    array[i] = prompt(`nhap phan tu thu ${i+1}`);
}
let temp = 0;
for(i =0 ; i < array.length -1; i++) {
    for (j=1+i ; j< array.length ; j++) {
        if(array[i] >  array[j] ) {
            temp = array[i];
            array[i] = array[j];
            array[j]= temp;
        }
    }
}
console.log(array);