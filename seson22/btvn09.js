let a = Number(prompt('nhap vao so phan tu ban muon them vao mang'));
let array = [];
for (i=0;i<a;i++) {
    array[i] = Number(prompt(`nhap phan tu thu ${i+1}`));
}
let temp = 0;
for(i =0 ; i < array.length -1; i++) {
    for (j=1+i ; j< array.length ; j++) {
        if(array[i] >  array[j] ) {
            temp = array[i];
            array[i] = array[j];
            array[j]= temp;
        } else if (array[i] == array[j]) {
            array.splice(j,1);
        }
    }
}
console.log(array);